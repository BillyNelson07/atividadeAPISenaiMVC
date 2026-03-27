const contatos = [
  { id: 1, nome: "Gabriel", telefone: 11223344, email: "gabriel@email.com" },
  { id: 2, nome: "Eduardo", telefone: 22334455, email: "eduardo@email.com" },
  { id: 3, nome: "Carlos", telefone: 33445566, email: "carlos@email.com" },
  { id: 4, nome: "Maria", telefone: 44556677, email: "maria@email.com" },
  { id: 5, nome: "Daniela", telefone: 55667788, email: "daniela@email.com" },
];

export function getAllContatosModel() {
  return contatos;
}

export function getContatoByIdModel(idDoContato) {
  return contatos.find((contato) => contato.id == idDoContato);
}

export function addNewContatoModel(dadosDoNovoContato) {
  contatos.push(dadosDoNovoContato);
  return contatos;
}

export function editContatoModel(idDoContatoParaAtualizar, novosDados) {
  const indiceDoContato = contatos.findIndex(
    (contato) => contato.id == idDoContatoParaAtualizar
  );
  if (indiceDoContato >= 0)
    contatos[indiceDoContato] = { ...contatos[indiceDoContato], ...novosDados };
  return contatos;
}

export function deleteContatoModel(idDoContato) {
  contatos.splice(idDoContato - 1, 1);
  return contatos;
}
