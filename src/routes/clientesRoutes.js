import express from "express"
import clientesControllers from "../Controllers/clienteController.js";


const router = express.Router();

router
    .get("/clientes", clientesControllers.listarCliente)
    .get("/clientes/:id", clientesControllers.listarClientesId)
    .post("/clientes", clientesControllers.cadastrarclientes)
    .put("/clientes/:id", clientesControllers.atualizarclientes)
    .delete("/clientes/:id", clientesControllers.excluirClientes)

export default router;
