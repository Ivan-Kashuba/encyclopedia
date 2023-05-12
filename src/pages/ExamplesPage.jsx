import PhotoCamera from "../modules/PhotoCamera/PhotoCamera.jsx";
import { useState } from "react";
import VideoCamera from "../modules/VideoCamera/VideoCamera.jsx";
import AudioRecord from "../modules/AudioRecord/AudioRecord.jsx";
import { useLocation } from "react-router-dom";
import ExampleItems from "../modules/ExampleItems/ExampleItems.jsx";
import { EXAMPLE_TYPE } from "../app/util/constants.js";

const ExamplesPage = () => {
  const location = useLocation();
  const startTab = location?.state?.currentTab || EXAMPLE_TYPE.START;
  const [exampleType, setExampleType] = useState(startTab);

  const openPhotoCamera = () => {
    setExampleType(EXAMPLE_TYPE.PHOTO);
  };
  const openVideoCamera = () => {
    setExampleType(EXAMPLE_TYPE.VIDEO);
  };

  const openAudioRecord = () => {
    setExampleType(EXAMPLE_TYPE.AUDIO);
  };

  const closeRecord = () => {
    setExampleType(EXAMPLE_TYPE.START);
  };

  return (
    <div>
      {exampleType === EXAMPLE_TYPE.START && (
        <div className="mt-[40px]">
          <ExampleItems
            videoHandleClick={openVideoCamera}
            photoHandleClick={openPhotoCamera}
            audioHandleClick={openAudioRecord}
          />
        </div>
      )}

      {exampleType === EXAMPLE_TYPE.PHOTO && (
        <PhotoCamera closeCamera={closeRecord} />
      )}

      {exampleType === EXAMPLE_TYPE.VIDEO && (
        <VideoCamera closeCamera={closeRecord} />
      )}

      {exampleType === EXAMPLE_TYPE.AUDIO && (
        <AudioRecord closeRecord={closeRecord} />
      )}
    </div>
  );
};

export default ExamplesPage;
