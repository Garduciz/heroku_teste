import mongoose from "mongoose";

const estabelecimentoSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Nome": {type: String, required: true},
            "Email": {type: String, required: true},
            "NomeDono": {type: String, required: true},
            "NomeEstabelecimento": {type: String, required: true},
            "Endereco": {type: String, required: true},
            "Senha": {type: String, required: true},
            "Telefone": {type: Number, required: true},
            "CNPJ": {type: Number, required: true},
            "TipoDeComida": {type: String, required: true},
            "Cupom": {type: String, required: true}

}   
);

const estabelecimento= mongoose.model('estabelecimento', estabelecimentoSchema);

export default estabelecimento;