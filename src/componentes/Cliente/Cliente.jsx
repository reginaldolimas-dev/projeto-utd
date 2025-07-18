import { Button, Card, Col, Collapse, Row, Typography } from "antd";
import Formulario from "../Formulario/Formulario";
import Tabela from "../Tabela/Tabela";

const Cliente = () => {
  const { Title } = Typography;

  const campos = [{ name: "nome", label: "Nome" }];

  const colunas = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Idade", dataIndex: "idade", key: "idade" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Ações", dataIndex: "acoes", key: "acoes" },
  ];

  return (
    <>
      <Card title={<Title level={3}>PESQUISA DE CLIENTES</Title>} extra={<Button type="primary">Cadastrar</Button>}>
        <Collapse defaultActiveKey={"0"}>
          <Collapse.Panel header={"Filtros"} key={"0"}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Formulario campos={campos} />
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <Row style={{ marginTop: 24 }}>
          <Col span={24}>
            <Tabela colunas={colunas} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Cliente;
