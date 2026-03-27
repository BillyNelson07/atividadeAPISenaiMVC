import * as contatosModelModule from '../model/contatosModel.js';

export function getAllContatosController(req, res) {
    const resultado = contatosModelModule.getAllContatosModel();
    res.status(200).json(resultado);
};

export function getContatoByIdController(req, res) {
    const id = req.params.id;
    if (!id) {
        res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    };

    const result = contatosModelModule.getContatoByIdModel(id)
    if (!result) {
        res.status(404).json({ mensagem: "Contato não encontrado!" })
    }
    res.status(200).json(result);
}

export function addNewContatoController(req, res){
    const dadosDoNovoContato = req.body;
    if(!dadosDoNovoContato){
        res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    };

    const resultado = contatosModelModule.addNewContatoModel(dadosDoNovoContato);
    res.status(201).json(resultado);
}

export function editContatoController(req, res){
    const id = req.params.id;
    const novosDados = req.body;
    if(!novosDados){
        res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    };

    const resultado = contatosModelModule.editContatoModel(id, novosDados);
    res.status(201).json(resultado);
};

export function deleteContatoController(req, res){
    const id = req.params.id
    if (!id) {
        res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    };

    const resultado = contatosModelModule.deleteContatoModel(id);
    res.status(201).json(resultado);
};
