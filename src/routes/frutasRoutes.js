import { Router } from 'express';
import * as frutaControllerModule from "../controller/frutasController.js";

export const frutasRouter = Router();

frutasRouter.get("/", frutaControllerModule.getAllFrutasController);
frutasRouter.get("/:id", frutaControllerModule.getFrutaByIdController);
