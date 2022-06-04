import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Nome": {type: String, required: true},
            "Email": {type: String, required: true},
            "Idade": {type: Number},
            "Endereco": {type: String, required: true},
            "Senha": {type: String, required: true},
            "Favorito": {type: String}
}   
);

const clientes= mongoose.model('clientes', clienteSchema);

export default clientes;