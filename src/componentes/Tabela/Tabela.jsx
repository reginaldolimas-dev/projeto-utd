import { Table } from "antd";

const Tabela = ({ dados, colunas }) => <Table columns={colunas} dataSource={dados} />;
export default Tabela;
