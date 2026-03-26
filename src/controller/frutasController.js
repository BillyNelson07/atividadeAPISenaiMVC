import { getAllFrutas, getFrutaById } from "../model/frutasModel.js";

export function getAllFrutasController(req, res){
    const resultado = getAllFrutas();
    res.status(200).json(resultado)
};

export function getFrutaByIdController(req, res){
    const {id} = req.params;
    if(!id){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"});
    };

    const result = getFrutaById(id)
    if(!result){
        res.status(404).json({mensagem: "Requisição não pode ser processada!"})
    }
    res.status(200).json(result);
};