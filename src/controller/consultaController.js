import * as consultaModelModule from "../model/consultaModel.js";

export function getAllConsultasController(req, res) {
  const resultado = consultaModelModule.getAllConsultasModel();
  res.status(200).json(resultado);
}

export function addNewConsultasController() {}
