const produtos = [
  { id: 1, nome: "Escova", categoria: "Utensílio", preco: 15 },
  { id: 2, nome: "Garfo", categoria: "Utensílio", preco: 8 },
  { id: 3, nome: "Televisão", categoria: "Eletrodoméstico", preco: 2000 },
  { id: 4, nome: "Arroz", categoria: "Alimento", preco: 21 },
  { id: 5, nome: "Chocolate", categoria: "Alimento", preco: 10 },
  { id: 6, nome: "Cif", categoria: "Produto de Limpeza", preco: 30 },
];

export function getAllProdutos() {
  return produtos;
}

export function getProdutoById(idDoProduto) {
  return produtos.find((produto) => produto.id == idDoProduto);
}

export function getProdutosByCategoria(categoriaDoProduto) {
  return produtos.filter((produto) => produto.categoria == categoriaDoProduto);
}
