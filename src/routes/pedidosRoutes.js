import express from "express"
import pedidosControllers from "../Controllers/pedidosController.js";


const router = express.Router();

router
    .get("/pedidos", pedidosControllers.listarPedidos)
    .get("/pedidos/:id", pedidosControllers.listarPedidosId)
    .post("/pedidos", pedidosControllers.cadastrarPedidos)
    .put("/pedidos/:id", pedidosControllers.atualizarPedidos)
    .delete("/pedidos/:id", pedidosControllers.excluirPedidos)

export default router;
