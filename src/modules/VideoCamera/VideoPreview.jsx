import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Radio } from "antd";
import { useTranslation } from "react-i18next";

const VideoPreview = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const downloadVideo = () => {
    const url = window.URL.createObjectURL(location?.state?.videoBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = `test.webm`;
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <video
        src={location?.state?.videoSrc}
        id="videoPreview"
        controls
        className="w-[900px] h-[675px]"
      />

      <Button onClick={downloadVideo} type="default" className="mt-[20px]">
        {t("Завантажити")}
      </Button>
    </div>
  );
};

export default VideoPreview;
