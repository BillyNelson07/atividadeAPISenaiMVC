import { Router } from "express";
import * as medicoControllerModule from "./src/controller/medicoController.js";

export const medicosRouter = Router();

medicosRouter.get("/filter", medicoControllerModule.getMedicosFilterController);
medicosRouter.get("/", medicoControllerModule.getAllMedicosController);