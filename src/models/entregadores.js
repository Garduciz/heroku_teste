import mongoose from "mongoose";

const entregadoresSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Nome": {type: String, required: true},
            "Email": {type: String, required: true},
            "Idade": {type: Number},
            "CPF": {type: String, required: true},
            "Senha": {type: String, required: true},
            "Telefone": {type: Number, required: true},
            "Localidade": {type: String, required: true}
}   
);

const entregadores = mongoose.model('entregadores', entregadoresSchema);

export default entregadores;