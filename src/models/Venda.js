import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Livro": {type: String, required: true}
}
);

const vendas= mongoose.model('vendas', vendaSchema);

export default vendas;