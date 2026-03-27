export const pacientes = [
  { id: 1, nome: "gabriel", telefone: 23420125 },
  { id: 2, nome: "davi", telefone: 52140328 },
  { id: 3, nome: "maria", telefone: 85652410 },
  { id: 4, nome: "ana", telefone: 96503201 },
];

export function getAllPacientesModel() {
  return pacientes;
}

export function newPacienteModel(dadosDoPaciente) {
  if (!dadosDoPaciente.nome || !dadosDoPaciente.telefone) {
    return "É necessário informar nome ou telefone";
  }
  let id = Math.random();
  let nome = dadosDoPaciente.nome;
  let telefone = dadosDoPaciente.telefone;
  const dados = { id: id, nome: nome, telefone: telefone };
  pacientes.push(dados);

  return pacientes;
}
