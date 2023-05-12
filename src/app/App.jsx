import "../index.css";
import "./config/i18n.js";
import { useRoutes } from "react-router-dom";
import routes from "./routes/index.jsx";

function App() {
  const element = useRoutes(routes);

  return <div className="min-h-screen bg-int-main-black">{element}</div>;
}

export default App;
