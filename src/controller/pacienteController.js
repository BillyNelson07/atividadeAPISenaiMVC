import * as pacienteModelModule from "../model/pacienteModel.js";

export function getAllPacienteController(req, res) {
  const resultado = pacienteModelModule.getAllPacientesModel();
  res.status(200).json(resultado);
}

export function newPacienteController(req, res) {
  const dados = req.body;
  if (!dados) {
    res.status(400).json("Requisição mal sucedida");
  }

  const resultado = pacienteModelModule.newPacienteModel(dados);
  res.status(201).json(resultado);
}
