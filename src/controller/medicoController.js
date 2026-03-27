import * as medicoModelModule from "../model/medicoModel.js";

export function getAllMedicosController(req, res) {
  const resultado = medicoModelModule.getAllMedicosModel();
  res.status(200).json(resultado);
}

export function getMedicosFilterController(req, res) {
  const especialidade = req.query.especialidade;
  if (!especialidade) {
    res.status(400).json("Requisição mal sucedida");
  }

  const resultado = medicoModelModule.getMedicosFilterModel(especialidade);
  res.status(200).json(resultado);
}
