import { Button, Radio } from "antd";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const PhotoPreview = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const photoRef = useRef(null);
  const [downloadFormat, setDownloadFormat] = useState("png");

  const downloadPhoto = () => {
    html2canvas(photoRef.current).then((canvas) => {
      const imageData = canvas.toDataURL(`image/${downloadFormat}`);
      const link = document.createElement("a");
      link.download = `${new Date().toISOString()}.${downloadFormat}`;
      link.href = imageData;
      link.click();
    });
  };

  const changeFormat = (e) => {
    setDownloadFormat(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={location?.state?.photoInfo?.photoSrc}
        className="w-[900px] h-[675px]"
        alt="#"
        ref={photoRef}
      />
      <Radio.Group onChange={changeFormat} value={downloadFormat}>
        <Radio.Button value="png">PNG</Radio.Button>
        <Radio.Button value="jpeg">JPEG</Radio.Button>
        <Radio.Button value="jpeg">GIF</Radio.Button>
        <Radio.Button value="webp">WEBP</Radio.Button>
      </Radio.Group>

      <Button onClick={downloadPhoto} type="default" className="mt-[20px]">
        {t("Завантажити")}
      </Button>
    </div>
  );
};

export default PhotoPreview;
