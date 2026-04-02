import { Router } from "express";
import * as consultaControllerModule from "./src/controller/consultaController.js";

export const consultasRouter = Router();

consultasRouter.get("/", consultaControllerModule.getAllConsultasController);