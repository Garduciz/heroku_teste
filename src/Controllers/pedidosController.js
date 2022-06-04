import pedidos from "../models/pedidos"

class pedidosControllers {
        //listar pedidos appget
    static listarPedidos = (req, res) => {
        pedidos.find((err, pedidos) => {
            res.status(200).json(pedidos)
    })}
        //listar pedidos por id 
        static listarPedidosId = (req, res) => {
                const id = req.params.id;
                pedidos.findById(id, (err, pedidos) => {
                if(err) {
                res.status(400).send({message: `${err.message} - pedidos não localizada.`})
                } else {
                res.status(200).send(pedidos);
            }
        })
      }
            //cadastrar pedidos 
    static cadastrarPedidos = (req, res) => {
    let pedido = new pedidos(req.body);

    pedido.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar pedido.`})
        } else {
            res.status(201).send({message: "pedido cadastrada com sucesso",
            
                                  "Pedido": pedido})
        }
})
}
        //atualizar pedidos
static atualizarPedidos = (req, res) => {
    const id = req.params.id;

    pedidos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Pedido atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirPedidos = (req, res) =>{
    const id = req.params.id;

    pedidos.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Pedido com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default pedidosControllers;