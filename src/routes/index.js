import express from "express";
import cliente from "./clientesRoutes.js";
import produto from "./produtosRoutes.js";
import pedido from "./pedidosRoutes.js";
import estabelecimento from "./estabelecimentoRoutes.js";
import entregadores from "./entregadoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " Bem vindo ao nosso site Ifome 🍔" })
 });

app.use(
    express.json(),
    cliente,
    produto,
    pedido,
    estabelecimento,
    entregadores
   
)
}


export default routes;

