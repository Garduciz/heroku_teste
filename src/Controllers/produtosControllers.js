import produtos from "../models/produtos"

class produtosControllers {
        //listar produtos appget
    static listarProdutos = (req, res) => {
        produtos.find((err, produto) => {
            res.status(200).json(produto)
    })}
        //listar produtos por id 
        static listarProdutosId = (req, res) => {
                const id = req.params.id;
                produtos.findById(id, (err, produto) => {
                if(err) {
                res.status(400).send({message: `${err.message} - produtos não localizada.`})
                } else {
                res.status(200).send(produto);
            }
        })
      }
            //cadastrar produtos
    static cadastrarProdutos = (req, res) => {
    let produto = new produtos(req.body);

    produto.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar produto.`})
        } else {
            res.status(201).send({message: "produto cadastrada com sucesso",
            
                                  "Produto": produto                               })
        }
})
}
        //atualizar produtos
static atualizarProdutos = (req, res) => {
    const id = req.params.id;

    produtos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Produto atualizado com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirProduto = (req, res) =>{
    const id = req.params.id;

    produtos.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Produto com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default produtosControllers;