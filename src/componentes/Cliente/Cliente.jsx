import { Button, Card, Col, Collapse, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { buscarClientes } from "../Api/rotas-cliente";
import Formulario from "../Formulario/Formulario";
import Tabela from "../Tabela/Tabela";

const Cliente = () => {
  const [clientes, definirClientes] = useState([]);

  const { Title } = Typography;

  useEffect(() => {
    buscarTodosClientes();
  }, []);

  async function buscarTodosClientes() {
    const resposta = await buscarClientes();
    if (resposta?.request?.status === 200) {
      definirClientes(resposta.data);
    }
  }

  const aoEnviar = (valores) => {
    if (valores?.nome) {
      definirClientes((prevClientes) =>
        prevClientes.filter((cliente) => cliente.nome.toLowerCase().includes(valores.nome.toLowerCase()))
      );
    }
    return;
  };

  const aoRedefinir = () => {
    buscarTodosClientes();
  };

  const campos = [{ name: "nome", label: "Nome" }];

  const colunas = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Idade", dataIndex: "idade", key: "idade" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Ações",
      key: "acoes",
      render: (registro) => (
        <>
          <Button type="primary" onClick={() => console.log(registro)}>
            Editar
          </Button>
          <Button type="primary" danger style={{ marginLeft: 8 }} onClick={() => console.log(registro)}>
            Excluir
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Card title={<Title level={3}>PESQUISA DE CLIENTES</Title>} extra={<Button type="primary">Cadastrar</Button>}>
        <Collapse defaultActiveKey={"0"}>
          <Collapse.Panel header={"Filtros"} key={"0"}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Formulario aoRedefinir={aoRedefinir} aoEnviar={aoEnviar} campos={campos} />
              </Col>
            </Row>
          </Collapse.Panel>
        </Collapse>
        <Row style={{ marginTop: 24 }}>
          <Col span={24}>
            <Tabela dados={clientes} colunas={colunas} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Cliente;
