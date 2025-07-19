import { api } from "./api";


export async function buscarClientes() {
    const resposta = await api.get("/clientes").then(resposta => resposta);
    return resposta;
}