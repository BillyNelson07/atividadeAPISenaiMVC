export const medicos = [
  { id: 1, nome: "Geraldo", especialidade: "Cardiologia" },
  { id: 2, nome: "Maria", especialidade: "Ortopedia" },
  { id: 3, nome: "Tina", especialidade: "Urologia" },
  { id: 4, nome: "Denis", especialidade: "Psiquiatria" },
];

export function getAllMedicosModel() {
  return medicos;
}

export function getMedicosFilterModel(especialidade) {
  const medicosFiltrados = medicos.filter(
    (medico) => medico.especialidade === especialidade
  );
  return medicosFiltrados;
}
