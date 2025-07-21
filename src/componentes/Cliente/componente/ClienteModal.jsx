import { Modal } from "antd";
import Formulario from "../../Formulario/Formulario";

const ClienteModal = ({ mostrarModal, fecharModal, aoFinalizar, registro, campos, titulo, onOk, ...props }) => {
  async function prepararEnvio(parametros) {
    aoFinalizar(parametros);
    fecharModal();
  }

  return (
    <Modal onOk={onOk} onCancel={fecharModal} visible={mostrarModal} title={titulo} footer={null} {...props}>
      <Formulario
        botaoEnviar={{ texto: "Salvar" }}
        botaoLimpar={{ texto: "Cancelar" }}
        aoRedefinir={fecharModal}
        aoEnviar={prepararEnvio}
        valoresIniciais={registro}
        campos={campos}
      />
    </Modal>
  );
};

export default ClienteModal;
