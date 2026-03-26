import express from "express";
import * as frutaController from "./src/controller/frutasController.js";
import * as alunoController from "./src/controller/alunosController.js";
import * as produtoController from "./src/controller/produtosController.js";

const app = express();
const port = 3000;

app.use(express.json());

//frutas
app.get("/frutas", frutaController.getAllFrutasController);
app.get("/frutas/:id", frutaController.getFrutaByIdController);
//------

//alunos
app.get("/alunos", alunoController.getAlunos);
app.post("/alunos", alunoController.postAluno);
//------

//produtos
app.get("/produtos", produtoController.getAllProdutosController);
app.get("/produtos/:id", produtoController.getProdutoByIdController);
app.get("/produtos/filter", produtoController.getProdutosByCategoriaController);
//------

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
