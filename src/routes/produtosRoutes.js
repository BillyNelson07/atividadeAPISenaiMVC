import { Router } from 'express';
import * as produtoControllerModule from "../controller/produtosController.js";

export const produtosRouter = Router();

produtosRouter.get(
  "/produtos/filter",
  produtoControllerModule.getProdutosByCategoriaController
);
produtosRouter.get("/produtos/:id", produtoControllerModule.getProdutoByIdController);
produtosRouter.get("/produtos", produtoControllerModule.getAllProdutosController);