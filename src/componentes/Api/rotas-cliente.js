import { api } from "./api";


export async function buscarClientes() {
    const resposta = await api.get("/clientes").then(resposta => resposta);
    return resposta;
}

export async function salvarCliente(dadoCliente) {
    const resposta = await api.post("/cliente", dadoCliente).then(resposta => resposta);
    return resposta;
}

export async function deletarCliente(dadoCliente) {
    const resposta = await api.delete(`/cliente/${dadoCliente?.id}`, dadoCliente).then(resposta => resposta);
    return resposta;
}

export async function editarCliente(dadoCliente) {
    const resposta = await api.put(`/cliente`, dadoCliente).then(resposta => resposta);
    return resposta;
}