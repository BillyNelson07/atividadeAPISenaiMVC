import express from "express";
import * as frutaControllerModule from "./src/controller/frutasController.js";
import * as alunoControllerModule from "./src/controller/alunosController.js";
import * as produtoControllerModule from "./src/controller/produtosController.js";
import * as contatosControllerModule from "./src/controller/contatosController.js";
import * as pacienteControllerModule from "./src/controller/pacienteController.js";
import * as medicoControllerModule from "./src/controller/medicoController.js";
import * as consultaControllerModule from "./src/controller/consultaController.js";

const app = express();
const port = 3000;

app.use(express.json());

//frutas
app.get("/frutas", frutaControllerModule.getAllFrutasController);
app.get("/frutas/:id", frutaControllerModule.getFrutaByIdController);
//------

//alunos
app.get("/alunos", alunoControllerModule.getAlunos);
app.post("/alunos", alunoControllerModule.postAluno);
//------

//produtos
app.get(
  "/produtos/filter",
  produtoControllerModule.getProdutosByCategoriaController
);
app.get("/produtos/:id", produtoControllerModule.getProdutoByIdController);
app.get("/produtos", produtoControllerModule.getAllProdutosController);
//------

//contatos
app.put("/contatos/:id", contatosControllerModule.editContatoController);
app.get("/contatos/:id", contatosControllerModule.getContatoByIdController);
app.get("/contatos", contatosControllerModule.getAllContatosController);
app.post("/contatos", contatosControllerModule.addNewContatoController);
app.delete("/contatos/:id", contatosControllerModule.deleteContatoController);
//------

//api desafio
app.get("/pacientes", pacienteControllerModule.getAllPacienteController);
app.post("/pacientes", pacienteControllerModule.newPacienteController);
app.get("/medicos/filter", medicoControllerModule.getMedicosFilterController);
app.get("/medicos", medicoControllerModule.getAllMedicosController);
app.get("/consultas", consultaControllerModule.getAllConsultasController);
//------

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
