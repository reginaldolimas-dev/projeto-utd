import { api } from "./api";


export async function buscarClientes() {
    const resposta = await api.get("/clientes").then(resposta => resposta);
    return resposta;
}

export async function salvarCliente(dadoCliente) {
    const resposta = await api.post("/cliente", dadoCliente).then(resposta => resposta);
    return resposta;
}