import { DesktopOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import "./App.css";
import LayoutBase from "./componentes/layout/LayoutBase";
import { getItem } from "./componentes/Util/LayoutUtils";

function App() {
  const menus = [getItem("Clientes", "1", <UserOutlined />), getItem("Option 2", "2", <DesktopOutlined />)];

  return (
    <>
      <LayoutBase items={menus}>
        <Button>OLa</Button>
      </LayoutBase>
    </>
  );
}

export default App;
