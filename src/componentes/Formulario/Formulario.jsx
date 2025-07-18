import { Button, Col, Form, Input, Row } from "antd";
const Formulario = ({ campos = [] }) => (
  <Form name="wrap" labelCol={{ flex: "110px" }} labelAlign="left" labelWrap wrapperCol={{ flex: 1 }} colon={false}>
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
        <Button type="primary" danger ghost htmlType="submit">
          Redefinir
        </Button>
      </Col>
      <Col>
        <Button type="primary" ghost htmlType="submit">
          Pesquisar
        </Button>
      </Col>
    </Row>
  </Form>
);
export default Formulario;
