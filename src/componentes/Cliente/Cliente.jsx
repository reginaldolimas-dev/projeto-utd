import { Button, Card, Col, Collapse, Modal, notification, Row, Typography } from "antd";
import { useEffect, useState } from "react";
import { buscarClientes, deletarCliente, salvarCliente } from "../Api/rotas-cliente";
import Formulario from "../Formulario/Formulario";

import Tabela from "../Tabela/Tabela";
import ClienteModal from "./componente/ClienteModal";

const Cliente = () => {
  const [clientes, definirClientes] = useState([]);
  const [mostrarModal, definirMostrarModal] = useState(false);

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

  async function aoSalvarCliente(parametros) {
    const resposta = await salvarCliente(parametros);
    console.log("🚀 ~ aoSalvarCliente ~ resposta:", resposta);
    if (resposta?.status === 200) {
      notification.success({
        message: "Cliente salvo com sucesso!",
      });
      await buscarTodosClientes();
    }
    fecharModal();
  }

  async function aoExcluirCliente(registro) {
    const resposta = await deletarCliente(registro);
    if (resposta?.status === 200) {
      notification.success({
        message: "Cliente excluído com sucesso!",
      });
      await buscarTodosClientes();
    }
    fecharModal();
  }

  const abrirModal = () => {
    definirMostrarModal(true);
  };
  const fecharModal = () => {
    definirMostrarModal(false);
  };

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

  function confirmar(registro) {
    Modal.confirm({
      title: `Olá, tem certeza disso?`,
      content: <>{`Continuar com a operação?`}</>,
      onOk() {
        aoExcluirCliente(registro);
        Modal.destroyAll();
      },
    });
  }

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
          <Button type="primary" danger style={{ marginLeft: 8 }} onClick={() => confirmar(registro)}>
            Excluir
          </Button>
        </>
      ),
    },
  ];

  const CAMPOS = [
    { name: "nome", label: "Nome", rules: [{ required: true, message: "O nome é obrigatório!" }] },
    { name: "idade", label: "Idade", tipo: "number", rules: [{ required: true, message: "A idade é obrigatória!" }] },
    { name: "email", label: "Email", rules: [{ type: "email ", message: "O email é inválido!" }] },
  ];

  return (
    <>
      <Card
        title={<Title level={3}>PESQUISA DE CLIENTES</Title>}
        extra={
          <Button type="primary" onClick={() => abrirModal()}>
            Cadastrar
          </Button>
        }
      >
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
      <ClienteModal
        titulo={"Cadastro de Cliente"}
        campos={CAMPOS}
        mostrarModal={mostrarModal}
        fecharModal={fecharModal}
        aoFinalizar={aoSalvarCliente}
        onOk={buscarTodosClientes}
      />
    </>
  );
};

export default Cliente;
