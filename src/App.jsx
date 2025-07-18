import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Route, Routes } from "react-router";
import Cliente from "./componentes/Cliente/Cliente";
import { Home } from "./componentes/Home/Home";
import LayoutBase from "./componentes/Layout/LayoutBase";
import { getItem } from "./componentes/Util/LayoutUtils";
import "./index.css";

function App() {
  const menus = [getItem("Home", "/", <DesktopOutlined />), getItem("Clientes", "/clientes", <UserOutlined />)];

  return (
    <>
      <LayoutBase items={menus}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Cliente />} />
          <Route path="*" element={<Button type="primary">Página não encontrada</Button>} />
        </Routes>
      </LayoutBase>
    </>
  );
}

export default App;
