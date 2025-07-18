import { Button, Card, Result } from "antd";
import { Link } from "react-router";

export function PaginaNaoEncontrada() {
  return (
    <Card title="404 - Página não encontrada!">
      <Result
        status="404"
        title="404 - Página não encontrada!"
        subTitle="Desculpe, não encontramos esta página. Tente voltar para o início e tente recomeçar"
        extra={
          <Link to="/">
            <Button type="primary">Voltar para o ínicio</Button>
          </Link>
        }
      />
    </Card>
  );
}
