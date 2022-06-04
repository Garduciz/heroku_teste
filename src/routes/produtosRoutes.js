import express from "express"
import produtosControllers from "../Controllers/produtosControllers";


const router = express.Router();

router
    .get("/produtos", produtosControllers.listarProdutos)
    .get("/produtos/:id", produtosControllers.listarProdutosId)
    .post("/produtos", produtosControllers.cadastrarProdutos)
    .put("/produtos/:id", produtosControllers.atualizarProdutos)
    .delete("/produtos/:id", produtosControllers.excluirProduto)

export default router;
