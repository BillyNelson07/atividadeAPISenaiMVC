import * as moduleAlunos from '../model/alunosModel.js'

export function getAlunos(req, res){
    const resultado = moduleAlunos.getAllAlunos();
    res.status(200).json(resultado);
};

export function postAluno(req, res){
    const dados = req.body;
    const resultado = moduleAlunos.addNewAluno(dados);
    res.status(200).json(resultado);
};