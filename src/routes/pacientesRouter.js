import * as pacienteControllerModule from "../src/controller/pacienteController.js";

export const pacientesRouter = Router();

pacientesRouter.get("/", pacienteControllerModule.getAllPacienteController);
pacientesRouter.post("/", pacienteControllerModule.newPacienteController);