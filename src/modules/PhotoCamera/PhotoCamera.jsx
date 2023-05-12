import { useEffect, useState } from "react";
import photoStart from "../../assets/PhotoStart.png";
import { useNavigate } from "react-router-dom";
import closeIcon from "./../../assets/close-modal.svg";
import cameraSideImg from "./../../assets/camera-side.svg";

const PhotoCamera = ({ closeCamera }) => {
  const navigate = useNavigate();
  const [cameraView, setCameraView] = useState(false);

  useEffect(() => {
    startWebcam();

    return () => {
      stopUseCamera();
    };
  }, [cameraView]);

  let video;
  let canvas, ctx;

  const init = () => {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
  };

  const startWebcam = () => {
    init();
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: !cameraView
          ? true
          : {
              facingMode: {
                exact: "environment",
              },
            },
      })
      .then((stream) => {
        video = document.querySelector("#video");
        window.stream = stream;
        video.srcObject = stream;
        video.play();
      })
      .catch(() => {
        setCameraView(false);
      });
  };

  const stopUseCamera = () => {
    window.stream.getTracks().forEach(function (track) {
      track.stop();
    });
  };

  const snapshot = () => {
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    sendPhotoInfo();
  };

  const sendPhotoInfo = () => {
    canvas.toBlob((blob) => {
      const file = new File([blob], "image_file.jpg", { type: "image/jpeg" });
      const photoInfo = {
        photoSrc: canvas.toDataURL("image/jpeg"),
        photoFile: file,
      };
      navigate("/photo-preview", {
        state: { photoInfo: photoInfo },
      });
      closeCamera();
    });
  };

  return (
    <div className="bg-black max-h-[100vh]">
      <div className="absolute top-0 left-0 w-screen h-[100vh] bg-black flex justify-center items-center">
        <video className="w-[900px]" id="video" />
      </div>

      <div className="absolute right-0 top-0 flex flex-col items-center justify-center bg-[rgba(90,98,102,0.4)] h-[100vh] w-[120px]">
        <img
          onClick={snapshot}
          className="cursor-pointer"
          src={photoStart}
          alt="#"
        />

        <div
          className="cursor-pointer text-white mt-[15px]"
          onClick={() => setCameraView((prev) => !prev)}
        >
          <img src={cameraSideImg} alt="#" />
        </div>

        <div
          className="absolute bottom-[45px] cursor-pointer"
          onClick={closeCamera}
        >
          <img src={closeIcon} alt="#" />
        </div>
      </div>

      <div className="hidden">
        <canvas id="myCanvas" width="1080" height="810" className="w-[300px]" />
      </div>
    </div>
  );
};

export default PhotoCamera;
