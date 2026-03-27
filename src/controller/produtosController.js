import * as produtosModelModule from "../model/produtosModel.js";

export function getAllProdutosController(req, res) {
  const resultado = produtosModelModule.getAllProdutos();
  res.status(200).json(resultado);
}

export function getProdutoByIdController(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
  }

  const resultado = produtosModelModule.getProdutoById(id);
  if (!resultado) {
    res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
  }
  res.status(200).json(resultado);
}

export function getProdutosByCategoriaController(req, res) {
  const { categoria } = req.query;
  if (!categoria) {
    res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    return;
  }

  const resultado = produtosModelModule.getProdutosByCategoria(categoria);
  if (!resultado || resultado.length === 0) {
    res.status(404).json({ mensagem: "Requisição não pode ser processada!" });
    return;
  }
  res.status(200).json(resultado);
}
