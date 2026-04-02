import pool from "../database/db.js";

export async function getAllContatosModel() {
  try {
    const todosOsContatos = await pool.query('SELECT * FROM CONTATO;')
    return todosOsContatos.rows;
  } catch (erro) {
    console.log('erro:', erro);
    
  }
}

export async function getContatoByIdModel(idDoContato) {
  const contato = await pool.query(`SELECT * FROM CONTATO WHERE ID=${idDoContato}`);
  return contato.rows;
}

// export function addNewContatoModel(dadosDoNovoContato) {
//   contatos.push(dadosDoNovoContato);
//   return contatos;
// }

// export function editContatoModel(idDoContatoParaAtualizar, novosDados) {
//   const indiceDoContato = contatos.findIndex(
//     (contato) => contato.id == idDoContatoParaAtualizar
//   );
//   if (indiceDoContato >= 0)
//     contatos[indiceDoContato] = { ...contatos[indiceDoContato], ...novosDados };
//   return contatos;
// }

// export function deleteContatoModel(idDoContato) {
//   contatos.splice(idDoContato - 1, 1);
//   return contatos;
// }
