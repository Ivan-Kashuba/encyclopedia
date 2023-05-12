import { useEffect, useState } from "react";
import videoStart from "../../assets/VideoStart.png";
import { ReactComponent as CloseIcon } from "../../assets/close-modal.svg";
import { ReactComponent as CameraSideImg } from "./../../assets/camera-side.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const VideoCamera = ({ closeCamera }) => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState();
  const [recordedBlobsArr, setRecordedBlobsArr] = useState([]);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerMinutes, setTimerMinuter] = useState(0);
  const [isRecordButtonDisabled, setIsRecordButtonDisabled] = useState(false);
  const [cameraView, setCameraView] = useState(false);

  useEffect(() => {
    if (isRecording) {
      let seconds = 0;
      let minutes = 0;
      const countTime = setInterval(() => {
        ++seconds;
        setTimerSeconds(seconds);
        if (seconds === 60) {
          minutes++;
          seconds = 0;
          setTimerSeconds(seconds);
          setTimerMinuter(minutes);
        }
      }, 1000);
      return () => clearInterval(countTime);
    }
  }, [isRecording]);

  useEffect(() => {
    if (timerMinutes === 3) {
      stopRecording();
    }
  }, [timerMinutes]);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: !cameraView
          ? true
          : {
              facingMode: {
                exact: "environment",
              },
            },
      })
      .then((stream) => {
        setIsRecordButtonDisabled(false);
        let gumVideo = document.getElementById("gum");
        window.stream = stream;
        gumVideo.srcObject = stream;
      })
      .catch(() => {
        setCameraView(false);
        setIsRecordButtonDisabled(true);
      });
    return () => {
      stopUseCamera();
    };
  }, [cameraView]);

  function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
      setRecordedBlobsArr((oldArray) => [...oldArray, event.data]);
    }
  }

  const toggleRecording = () => {
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    let mediaRecorder;
    try {
      mediaRecorder = new MediaRecorder(window.stream);
    } catch (e) {
      return;
    }
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10);
    setMediaRecorder(mediaRecorder);
  };

  const stopRecording = async () => {
    setIsRecording(false);
    mediaRecorder?.stop();
    let superBuffer = new Blob(recordedBlobsArr);
    navigate("/video-preview", {
      state: {
        videoSrc: window.URL.createObjectURL(superBuffer),
        videoBlob: superBuffer,
      },
    });
  };

  const stopUseCamera = () => {
    window.stream.getTracks().forEach(function (track) {
      track.stop();
    });
  };

  return (
    <div className="bg-black max-h-[100vh]">
      <div className="absolute top-0 left-0 w-screen h-[100vh] bg-black flex justify-center items-center">
        <video className="w-[900px]" id="gum" autoPlay muted></video>
      </div>
      <div className="absolute right-0 top-0 flex flex-col items-center justify-center bg-[rgba(90,98,102,0.4)] h-[100vh] w-[120px]">
        <div
          className={`mb-[113px] ${
            isRecording ? "mb-[113px] text-red-600" : "text-white"
          }`}
        >
          {timerMinutes > 9 ? timerMinutes : `0${timerMinutes}`}:
          {timerSeconds > 9 ? timerSeconds : `0${timerSeconds}`}
        </div>

        <div className="text-white cursor-pointer">
          <Button
            type="ghost"
            className="mt-[-100px] mb-[60px]"
            id="record"
            onClick={toggleRecording}
            disabled={isRecordButtonDisabled}
          >
            <img src={videoStart} alt="" />
          </Button>
        </div>

        <div
          className="text-white cursor-pointer mt-[15px]"
          onClick={() => setCameraView(!cameraView)}
        >
          <CameraSideImg />
        </div>

        <div
          className="absolute bottom-[45px] cursor-pointer"
          onClick={closeCamera}
        >
          <CloseIcon />
        </div>
      </div>

      <div className="hidden">
        <video className="w-[300px]" id="recorded" loop controls />
      </div>
    </div>
  );
};

export default VideoCamera;
