import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import ptBR from "antd/lib/locale/pt_BR";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={ptBR}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
