import estabelecimentos from "../models/Estabelecimento.js"

class estabelecimentoControllers {
        //listar estabelecimentos appget
    static listarEstabelecimento = (req, res) => {
        estabelecimentos.find((err, estabelecimentos) => {
            res.status(200).json(estabelecimentos)
    })}
        //listar estabelecimentos por id 
        static listarEstabelecimentoId = (req, res) => {
                const id = req.params.id;
                estabelecimentos.findById(id, (err, estabelecimentos) => {
                if(err) {
                res.status(400).send({message: `${err.message} - estabelecimento não localizado.`})
                } else {
                res.status(200).send(estabelecimentos);
            }
        })
      }
            //cadastrar estabelecimentos 
    static cadastrarEstabelecimento = (req, res) => {
    let estabelecimento = new estabelecimentos(req.body);

    estabelecimento.save((err) => {
    
        if(err) {
            res.status(500).send({message: `${err.message} - falha ao cadastrar estabelecimento.`})
        } else {
            res.status(201).send({message: "estabelecimento cadastrada com sucesso",
            
                                  "Estabelecimento": estabelecimento                            })
        }
})
}
        //atualizar estabelecimentos
static atualizarEstabelecimento = (req, res) => {
    const id = req.params.id;

    estabelecimentos.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Cliente atualizada com sucesso'})
        } else{
            res.status(500);send({message: err.messasge})
        }
    })
}

static excluirEstabelecimentos = (req, res) =>{
    const id = req.params.id;

    estabelecimentos.findByIdAndDelete(id, (err) =>{
        if(!err){
            res.status(200).send({message: `Estabelecimento com ID ${id} removida com sucesso` })
        } else {
            res.status(500).send({message: "ID não localizado"})
        }
    })
}
}

export default estabelecimentoControllers;