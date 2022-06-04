import express from "express"
import estabelecimentosControllers from "../Controllers/estabelecimentoControllers";


const router = express.Router();

router
    .get("/estabelecimentos", estabelecimentosControllers.listarEstabelecimento)
    .get("/estabelecimentos/:id", estabelecimentosControllers.listarEstabelecimentoId)
    .post("/estabelecimentos", estabelecimentosControllers.cadastrarEstabelecimento)
    .put("/estabelecimentos/:id", estabelecimentosControllers.atualizarEstabelecimento)
    .delete("/estabelecimentos/:id", estabelecimentosControllers.excluirEstabelecimentos)

export default router;
