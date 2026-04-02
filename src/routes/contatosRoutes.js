import { Router } from "express";
import * as contatosControllerModule from "../src/controller/contatosController.js";

export const contatosRouter = Router();

contatosRouter.put("/:id", contatosControllerModule.editContatoController);
contatosRouter.get("/:id", contatosControllerModule.getContatoByIdController);
contatosRouter.get("/", contatosControllerModule.getAllContatosController);
contatosRouter.post("/", contatosControllerModule.addNewContatoController);
contatosRouter.delete("/:id", contatosControllerModule.deleteContatoController);