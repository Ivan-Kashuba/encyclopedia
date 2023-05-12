import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout.jsx";
import HomePage from "../../pages/HomePage.jsx";
import PhotoPage from "../../pages/PhotoPage.jsx";
import ExamplesPage from "../../pages/ExamplesPage.jsx";
import PhotoPreview from "../../modules/PhotoCamera/PhotoPreview.jsx";
import VideoPreview from "../../modules/VideoCamera/VideoPreview.jsx";
import VideoPage from "../../pages/VideoPage.jsx";
import AudioPage from "../../pages/AudioPage.jsx";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { path: "", element: <HomePage /> },
          { path: "photo", element: <PhotoPage /> },
          { path: "examples", element: <ExamplesPage /> },
          { path: "photo-preview", element: <PhotoPreview /> },
          { path: "video-preview", element: <VideoPreview /> },
          { path: "video", element: <VideoPage /> },
          { path: "audio", element: <AudioPage /> },
          {
            path: "*",
            element: (
              <div className="flex w-[100%] items-center justify-center h-[80vh]">
                NOT FOUND
              </div>
            ),
          },
        ],
      },
    ],
  },
];
export default routes;
