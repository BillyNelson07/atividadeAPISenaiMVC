import express from "express";
import { frutasRouter } from "./src/routes/frutasRoutes.js";
import { alunosRouter } from "./src/routes/alunosRouter.js";
import { produtosRouter } from "./src/routes/produtosRoutes.js";


import * as contatosControllerModule from "./src/controller/contatosController.js";
import * as pacienteControllerModule from "./src/controller/pacienteController.js";
import * as medicoControllerModule from "./src/controller/medicoController.js";
import * as consultaControllerModule from "./src/controller/consultaController.js";

const app = express();
const port = 3000;

app.use(express.json());

//frutas
app.use('/', frutasRouter);
//------

//alunos
app.use('/', alunosRouter)
//------

//produtos
app.use('/', produtosRouter)
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
