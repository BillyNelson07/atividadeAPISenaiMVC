import express from "express";
import * as frutaController from "./src/controller/frutasController.js";
import * as alunoController from "./src/controller/alunosController.js";
import * as produtoController from "./src/controller/produtosController.js";
import * as contatosController from "./src/controller/contatosController.js";

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
app.get("/produtos/filter", produtoController.getProdutosByCategoriaController);
app.get("/produtos/:id", produtoController.getProdutoByIdController);
app.get("/produtos", produtoController.getAllProdutosController);
//------

//contatos
app.put("/contatos/:id", contatosController.editContatoController);
app.get("/contatos/:id", contatosController.getContatoByIdController);
app.get("/contatos", contatosController.getAllContatosController);
app.post("/contatos", contatosController.addNewContatoController);
app.delete("/contatos/:id", contatosController.deleteContatoController);
//------

//tarefas

//------


app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
