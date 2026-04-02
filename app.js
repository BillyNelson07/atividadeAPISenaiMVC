import express from "express";
import { frutasRouter } from "./src/routes/frutasRoutes.js";
import { alunosRouter } from "./src/routes/alunosRouter.js";
import { produtosRouter } from "./src/routes/produtosRoutes.js";
import { contatosRouter } from "./src/routes/contatosRoutes.js";
import { pacientesRouter } from "./src/routes/pacientesRouter.js";
import { medicosRouter } from "./src/routes/medicosRouter.js";
import { consultasRouter } from "./src/routes/consultasRouter.js";

const app = express();
const port = 3000;

app.use(express.json());

//frutas
app.use('/frutas', frutasRouter);
//------

//alunos
app.use('/alunos', alunosRouter)
//------

//produtos
app.use('/produtos', produtosRouter)
//------

//contatos
app.use('/contatos', contatosRouter)
//------

//api desafio
app.use('/pacientes', pacientesRouter)
app.use('/medicos', medicosRouter)
app.use('/consultas', consultasRouter)
//------

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
