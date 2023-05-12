import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./app/config/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ConfigProvider theme={theme}>
      <Suspense fallback={""}>
        <App />
      </Suspense>
    </ConfigProvider>
  </BrowserRouter>
);
