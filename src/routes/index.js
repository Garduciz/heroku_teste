import express from "express";
import vendas from "../routes/vendasRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " Bem vindo ao nosso site Ifome 🍔" })
 });

app.use(
    express.json(),
    vendas
   
)
}


export default routes;

