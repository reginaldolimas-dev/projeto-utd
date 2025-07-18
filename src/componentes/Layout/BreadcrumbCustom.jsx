import { Breadcrumb } from "antd";
import { useLocation } from "react-router";

export const BreadcrumbCustom = () => {
  const location = useLocation();

  const routeMap = {
    "/": "Home",
    "/clientes": "Clientes",
  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">Home</Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      return <Breadcrumb.Item key={url}>{routeMap[url] || url}</Breadcrumb.Item>;
    }),
  ];

  return <Breadcrumb style={{ margin: "16px 0" }}>{breadcrumbItems}</Breadcrumb>;
};
