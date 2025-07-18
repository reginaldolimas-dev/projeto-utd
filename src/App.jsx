import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Route, Routes } from "react-router";
import Cliente from "./componentes/Cliente/Cliente";
import { Home } from "./componentes/Home/Home";
import LayoutBase from "./componentes/Layout/LayoutBase";
import { PaginaNaoEncontrada } from "./componentes/Layout/PaginaNaoEncontrada";
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
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
      </LayoutBase>
    </>
  );
}

export default App;
