import entregadores from "../models/entregadores"

class entregadoresControllers {
        //listar entregadores appget
    static listarEntregador = (req, res) => {
        entregadores.find((err, entregadores) => {
            res.status(200).json(entregadores)
    })}
        //listar entregadores por id 
        static listarEntregadoresId = (req, res) => {
                const id = req.params.id;
                entregadores.findById(id, (err, entregadores) => {
                if(err) {
                res.status(400).send({message: `${err.message} - entregadores não localizada.`})
                } else {
                res.status(200).send(entregadores);
            }
        })
      }
            //cadastrar entregadores 
    static cadastrarEntregador = (req, res) => {
    let entregador = new entregadores(req.body);

    entregador.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar entregador.`})
        } else {
            res.status(201).send({message: "entregador(a) cadastrada com sucesso",
            
                                  "Entregador": entregador                                })
        }
})
}
        //atualizar entregadores
static atualizarEntregadores = (req, res) => {
    const id = req.params.id;

    entregadores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Entregador atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirEntregador = (req, res) =>{
    const id = req.params.id;

    entregadores.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Entregador com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default entregadoresControllers;