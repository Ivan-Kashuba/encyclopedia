import { Fragment, useEffect, useState } from "react";
import { Button, Modal } from "antd";
import NativeAudioPlayer from "./NativeAudioPlayer.jsx";
import WaveSoundAnimation from "./WaveSoundAnimation.jsx";
import MicRecorder from "mic-recorder-to-mp3";
import { useTranslation } from "react-i18next";

const shortFormatSeconds = (val) => {
  const minutes =
    Math.trunc(val / 60) < 10 ? Math.trunc(val / 60) : Math.trunc(val / 60);
  const seconds = val % 60 < 10 ? "0" + (val % 60) : val % 60;
  return minutes + ":" + seconds;
};

export default function AudioRecord({ closeRecord }) {
  const { t } = useTranslation();
  const [Mp3Recorder] = useState(new MicRecorder({ bitRate: 128 }));
  const limitSecondsRecordAudio = 120;

  const [stepRecordAudio, setStepRecordAudio] = useState("start");
  const [timerId, setTimerId] = useState();
  const [seconds, setSeconds] = useState(0);
  const [blobURL, setBlobURL] = useState("");

  useEffect(() => {
    if (
      "mediaDevices" in navigator &&
      "getUserMedia" in navigator.mediaDevices
    ) {
      navigator.mediaDevices.getUserMedia({ audio: true });
    }

    return () => {
      clearInterval(timerId);

      setSeconds(0);
      setStepRecordAudio("start");
      if (Mp3Recorder.activeStream !== null) {
        stopRecordMp3();
      }
    };
  }, []);

  useEffect(() => {
    if (seconds >= limitSecondsRecordAudio) {
      startListeningAudio();
    }
  }, [seconds]);

  const startRecordMp3 = () => {
    Mp3Recorder.start().then(() => {});
  };

  const stopRecordMp3 = () => {
    Mp3Recorder.stop()
      .getMp3()
      // eslint-disable-next-line no-unused-vars
      .then(([_, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setBlobURL(blobURL);
      });
  };

  const downloadData = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = blobURL;
    downloadLink.download = "audio-file.mpeg";
    downloadLink.click();
  };

  const Clear = () => {
    setStepRecordAudio("start");
    clearInterval(timerId);
    setSeconds(0);
  };

  const startRecordAudio = () => {
    setStepRecordAudio("recording");
    startRecordMp3();
    const timerInterval = setInterval(() => {
      setSeconds((state) => state + 1);
    }, 1000);
    setTimerId(timerInterval);
  };

  const startListeningAudio = () => {
    stopRecordMp3();
    setStepRecordAudio("listening");
    clearInterval(timerId);
  };

  return (
    <Modal
      title={t("Запис аудіо")}
      open={true}
      onOk={startRecordAudio}
      onCancel={closeRecord}
      footer={[
        <Fragment key="footer">
          {stepRecordAudio === "start" && (
            <Button type="primary" onClick={startRecordAudio}>
              {t("Запис")}
            </Button>
          )}

          {stepRecordAudio === "recording" && (
            <Button danger onClick={startListeningAudio}>
              {t("Зупинити запис та прослухати")}
            </Button>
          )}

          {stepRecordAudio === "listening" && (
            <>
              <Button type="primary" onClick={downloadData}>
                {t("Завантажити")}
              </Button>
              <Button onClick={Clear}>{t("Очистити")}</Button>
            </>
          )}
        </Fragment>,
      ]}
    >
      <div className="flex items-center justify-center">
        <div>
          {stepRecordAudio === "recording" && (
            <>
              <WaveSoundAnimation />
              <div className="mb-[8px]">
                <span className="text-[11px] text-int-red text-center font-BeVietnamRegular">
                  {shortFormatSeconds(seconds)}
                </span>
              </div>
            </>
          )}

          {stepRecordAudio === "listening" && (
            <>
              <div className="mt-[40px] mb-[10px]">
                {blobURL === "" ? (
                  <span>{t("Завантаження")}</span>
                ) : (
                  <NativeAudioPlayer audio={blobURL} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
