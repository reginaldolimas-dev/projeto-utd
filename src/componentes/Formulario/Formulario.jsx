import { Button, Col, Form, Input, Row } from "antd";
const Formulario = ({ aoEnviar, aoRedefinir, campos = [] }) => {
  const [form] = Form.useForm();

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
      <Row>
        {campos.map((campo) => (
          <Col key={campo.name} span={6}>
            <Form.Item key={campo.name} label={campo.label} name={campo.name} rules={campo.rules}>
              <Input />
            </Form.Item>
          </Col>
        ))}
      </Row>
      <Row justify="space-between">
        <Col>
          <Button type="primary" danger ghost onClick={onReset}>
            Redefinir
          </Button>
        </Col>
        <Col>
          <Button type="primary" ghost htmlType="submit" onClick={onSubmit}>
            Pesquisar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
