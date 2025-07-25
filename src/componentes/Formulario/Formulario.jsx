import { Button, Col, Form, Input, InputNumber, Row } from "antd";
import { useEffect } from "react";
const Formulario = ({
  aoEnviar,
  aoRedefinir,
  campos = [],
  botaoEnviar = {},
  botaoLimpar = {},
  valoresIniciais = {},
}) => {
  const [form] = Form.useForm();

  const { type: tipoEnviar = "primary", texto: textoEnviar = "Pesquisar" } = botaoEnviar;

  const { type: tipoCancelar = "primary", texto: textoCancelar = "Redefinir" } = botaoLimpar;

  const pegarValorInicial = (campo) => {
    return valoresIniciais?.[campo.name];
  };

  const adicionarPropriedades = (campo) => {
    return {
      initialValue: pegarValorInicial(campo),
      rules: campo.rules || [],
    };
  };

  useEffect(() => {
    if (valoresIniciais) {
      const novosValores = {};
      campos.forEach((campo) => {
        novosValores[campo.name] = pegarValorInicial(campo);
      });
      form.setFieldsValue(novosValores);
    }
  }, [valoresIniciais, form, campos]);

  const onSubmit = async (e) => {
    e?.preventDefault();
    try {
      const valores = await form.validateFields();
      await aoEnviar?.(valores);
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
            <Form.Item key={campo.name} label={campo.label} name={campo.name} {...adicionarPropriedades(campo)}>
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
