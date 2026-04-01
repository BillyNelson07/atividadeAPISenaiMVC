import { Router } from 'express';
import * as frutaControllerModule from "../controller/frutasController.js";

export const frutasRouter = Router();

frutasRouter.get("/frutas", frutaControllerModule.getAllFrutasController);
frutasRouter.get("/frutas/:id", frutaControllerModule.getFrutaByIdController);
