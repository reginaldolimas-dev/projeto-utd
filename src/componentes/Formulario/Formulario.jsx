import { Button, Col, Form, Input, InputNumber, Row } from "antd";
const Formulario = ({ aoEnviar, aoRedefinir, campos = [], botaoEnviar = {}, botaoLimpar = {} }) => {
  const [form] = Form.useForm();

  const { type: tipoEnviar = "primary", texto: textoEnviar = "Pesquisar" } = botaoEnviar;

  const { type: tipoCancelar = "primary", texto: textoCancelar = "Redefinir" } = botaoLimpar;

  const onSubmit = async () => {
    try {
      const valores = await form.validateFields();
      aoEnviar?.(valores);
      form.resetFields();
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const onReset = () => {
    form.resetFields();
    aoRedefinir?.();
  };

  return (
    <Form
      form={form}
      name="wrap"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
    >
      {campos.map((campo) => (
        <Row>
          <Col key={campo.name} span={24}>
            <Form.Item key={campo.name} label={campo.label} name={campo.name} rules={campo.rules}>
              {campo.tipo === "number" ? (
                <InputNumber
                  min={0}
                  onKeyPress={(e) => {
                    if (!/[0-9]/.test(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  precision={0}
                  style={{ width: "100%" }}
                />
              ) : (
                <Input />
              )}
            </Form.Item>
          </Col>
        </Row>
      ))}
      <Row justify="space-between">
        <Col>
          <Button type={tipoCancelar} danger ghost onClick={onReset}>
            {textoCancelar}
          </Button>
        </Col>
        <Col>
          <Button ghost htmlType="submit" type={tipoEnviar} onClick={onSubmit}>
            {textoEnviar}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
