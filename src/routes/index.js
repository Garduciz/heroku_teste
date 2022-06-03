import express from "express";
import vendas from "../routes/vendasRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({Mensagem: " Bem vindos a API da Livraria Macabéa 📚" })
 });

app.use(
    express.json(),
    vendas
   
)
}


export default routes;

