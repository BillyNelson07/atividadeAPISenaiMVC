import { Router } from 'express';
import * as produtoControllerModule from "../controller/produtosController.js";

export const produtosRouter = Router();

produtosRouter.get("/filter", produtoControllerModule.getProdutosByCategoriaController);
produtosRouter.get("/:id", produtoControllerModule.getProdutoByIdController);
produtosRouter.get("/", produtoControllerModule.getAllProdutosController);