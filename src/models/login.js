import mongoose from "mongoose";

const loginSchema = new mongoose.Schema(
    {
            id: {type: String},
            "Email": {type: String, required: true},
            "Senha": {type: String, required: true}
}   
);

const login = mongoose.model('login', loginSchema);

export default login;