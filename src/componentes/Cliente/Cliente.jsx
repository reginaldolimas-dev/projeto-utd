import { Button, Card, Col, Collapse, Modal, notification, Row, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { buscarClientes, deletarCliente, editarCliente, salvarCliente } from "../Api/rotas-cliente";
import Formulario from "../Formulario/Formulario";

import Tabela from "../Tabela/Tabela";
import ClienteModal from "./componente/ClienteModal";

const Cliente = () => {
  const [clientes, definirClientes] = useState([]);
  const [mostrarModal, definirMostrarModal] = useState(false);
  const [registro, definirRegistro] = useState({});
  const [carregando, definirCarregando] = useState(false);
  const { Title } = Typography;

  useEffect(() => {
    buscarTodosClientes();
  }, []);

  async function buscarTodosClientes() {
    definirCarregando(true);
    const resposta = await buscarClientes();
    definirCarregando(false);
    if (resposta?.request?.status === 200) {
      definirClientes(resposta.data);
    }
  }

  async function aoSalvarCliente(parametros) {
    definirCarregando(true);
    const resposta = await salvarCliente(parametros);
    definirCarregando(false);
    if (resposta?.status === 200) {
      notification.success({
        message: "Cliente salvo com sucesso!",
      });
      await buscarTodosClientes();
    }
    fecharModal();
  }

  async function aoExcluirCliente(registro) {
    definirCarregando(true);
    const resposta = await deletarCliente(registro);
    definirCarregando(false);
    if (resposta?.status === 200) {
      notification.success({
        message: "Cliente excluído com sucesso!",
      });
      await buscarTodosClientes();
    }
    fecharModal();
  }

  async function aoEditarCliente(parametros) {
    const parametrosComId = { ...parametros, id: registro.id };
    definirCarregando(true);
    const resposta = await editarCliente(parametrosComId);
    definirCarregando(false);
    if (resposta?.status === 200) {
      notification.success({
        message: "Cliente editado com sucesso!",
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
    definirRegistro({});
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

  function confirmarExclusao(registro) {
    Modal.confirm({
      title: `Olá, tem certeza disso?`,
      content: <>{`Continuar com a operação?`}</>,
      onOk() {
        aoExcluirCliente(registro);
        Modal.destroyAll();
      },
    });
  }

  function abrirModalEdicao(registro) {
    definirRegistro((prev) => ({ ...prev, ...registro }));
    abrirModal();
  }

  console.log("registro:", registro);

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
          <Button type="primary" onClick={() => abrirModalEdicao(registro)}>
            Editar
          </Button>
          <Button type="primary" danger style={{ marginLeft: 8 }} onClick={() => confirmarExclusao(registro)}>
            Excluir
          </Button>
        </>
      ),
    },
  ];

  const CAMPOS = [
    { name: "nome", label: "Nome", rules: [{ required: true, message: "O nome é obrigatório!" }] },
    { name: "idade", label: "Idade", tipo: "number", rules: [{ required: true, message: "A idade é obrigatória!" }] },
    { name: "email", label: "Email", rules: [{ type: "email", message: "O email é inválido!" }] },
  ];

  return (
    <Spin spinning={carregando}>
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
        aoFinalizar={registro.id ? aoEditarCliente : aoSalvarCliente}
        onOk={buscarTodosClientes}
        registro={registro}
      />
    </Spin>
  );
};

export default Cliente;
