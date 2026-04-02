import * as pacientesModelModule from "./pacienteModel.js";
import * as medicosModelModule from "./medicoModel.js";

const consultas = [
  { id: 1, pacienteId: 1, medicoId: 1, data: "20/02/2025", status: true },
  { id: 2, pacienteId: 4, medicoId: 3, data: "01/05/2026", status: true },
  { id: 3, pacienteId: 4, medicoId: 2, data: "31/01/2026", status: true },
  { id: 4, pacienteId: 3, medicoId: 4, data: "05/07/2026", status: true },
  { id: 5, pacienteId: 2, medicoId: 1, data: "12/06/2026", status: true },
];

export function getAllConsultasModel() {
  return consultas.map((consulta) => {
    const paciente = pacientesModelModule.pacientes.find(
      (p) => p.id == consulta.pacienteId
    );
    const medico = medicosModelModule.medicos.find(
      (m) => m.id == consulta.medicoId
    );
    return {
      id: consulta.id,
      paciente: paciente ? paciente.nome : null,
      medico: medico ? medico.nome : null,
      data: consulta.data,
      status: consulta.status,
    };
  });
}

export function addNewConsultaModel(dadosNovaConsulta) {
  const idDaConsulta = Math.random();

  const nomePaciente = pacientesModelModule.pacientes
    .filter((paciente) => paciente.nome === dadosNovaConsulta.nomeDoPaciente)
    .map((paciente) => paciente.nome)
    .toString();

  //   if (idMedico === 0) {
  //     return "Paciente não encontrado";
  //   }

  const nomeMedico = medicosModelModule.medicos
    .filter((medico) => medico.nome === dadosNovaConsulta.nomeDoMedico)
    .map((medico) => medico.nome)
    .toString();

  //   if (idMedico === 0) {
  //     return "Paciente não encontrado";
  //   }

  const dadoParaNovaConsulta = {
    id: idDaConsulta,
    paciente: nomePaciente,
    medico: nomeMedico,
    data: dadosNovaConsulta.dataDaConsulta,
    status: true,
  };

  consultas.push(dadoParaNovaConsulta);

  return dadoParaNovaConsulta;
}

export function deleteConsultaModel(idConsulta) {
  consultas.splice(idConsulta - 1, 1);
  return consultas;
}
