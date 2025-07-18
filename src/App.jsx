import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Route, Routes } from "react-router";
import "./App.css";
import Cliente from "./componentes/Cliente/Cliente";
import LayoutBase from "./componentes/layout/LayoutBase";
import { getItem } from "./componentes/Util/LayoutUtils";

function App() {
  const menus = [
    getItem("Home", "/", <DesktopOutlined />),
    getItem("Clientes", "/clientes", <UserOutlined />),
  ];

  return (
    <>
      <LayoutBase items={menus}>
        <Routes>
          <Route path="/" element={<Button type="primary">Home</Button>} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="*" element={<Button type="primary">Página não encontrada</Button>} />
        </Routes>
      </LayoutBase>
    </>
  );
}

export default App;
