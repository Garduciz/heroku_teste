import mongoose from "mongoose";

const pedidosSchema = new mongoose.Schema(
    {
            id: {type: String},
            "NomeCliente": {type: String, required: true},
            "NomeDoEstabelecimento": {type: String, required: true},
            "Quantidade": {type: Number},
            "Endereco": {type: String, required: true},
            "NomeDoProduto": {type: String, required: true},
            "NomeDoEntregador": {type: String},
            "Preco": {type: Number, required: true}
}   
);

const pedidos= mongoose.model('pedidos', pedidosSchema);

export default pedidos;