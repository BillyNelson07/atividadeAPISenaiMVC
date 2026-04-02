import { Router } from 'express';
import * as alunoControllerModule from "../controller/alunosController.js";

export const alunosRouter = Router();

alunosRouter.get("/", alunoControllerModule.getAlunos);
alunosRouter.post("/", alunoControllerModule.postAluno);