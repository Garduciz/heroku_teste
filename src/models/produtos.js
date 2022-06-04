import mongoose from "mongoose";

const produtosSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Nome": {type: String, required: true},
            "Marca": {type: String, required: true},
            "Preco": {type: Number, required: true},
            "Validade": {type: String, required: true},
            "Ingredientes": {type: Number, required: true},
            "Quantidade": {type: Number, required: true}
}   
);

const produtos = mongoose.model( 'produtos', produtosSchema);

export default produtos;