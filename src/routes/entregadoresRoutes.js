import express from "express"
import entregadoresControllers from "../Controllers/entregadoresControllers";


const router = express.Router();

router
    .get("/entregadores", entregadoresControllers.listarEntregador)
    .get("/entregadores/:id", entregadoresControllers.listarEntregadoresId)
    .post("/entregadores", entregadoresControllers.cadastrarEntregador)
    .put("/entregadores/:id", entregadoresControllers.atualizarEntregadores)
    .delete("/entregadores/:id", entregadoresControllers.excluirEntregador)

export default router;
