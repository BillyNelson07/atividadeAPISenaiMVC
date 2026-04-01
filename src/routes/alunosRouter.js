import { Router } from 'express';
import * as alunoControllerModule from "../controller/alunosController.js";

export const alunosRouter = Router();

alunosRouter.get("/alunos", alunoControllerModule.getAlunos);
alunosRouter.post("/alunos", alunoControllerModule.postAluno);