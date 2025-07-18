import Icon, { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Alert, Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router";
import { BreadcrumbCustom } from "./BreadcrumbCustom";
const { Header, Content, Footer, Sider } = Layout;

const LayoutBase = ({ items, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  function aoClicar({ key }) {
    if (key) {
      navigate(key);
    }
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} onClick={aoClicar} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Alert
            style={{ padding: "2px" }}
            message={
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <h4 className="vibrarHorizontal" style={{ color: "#f5222d", fontSize: "1rem", margin: 0 }}>
                  <Icon type="GrSystem" library="gr" /> {`DESENVOLVIMENTO DE INTERFACES WEB COM JAVASCRIPT`}{" "}
                  <Icon type="GrSystem" library="gr" />
                </h4>
              </div>
            }
            type="error"
          />
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <BreadcrumbCustom />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutBase;
