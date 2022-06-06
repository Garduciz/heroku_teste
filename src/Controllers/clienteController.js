import clientes from "../models/Cliente.js";

class clientesControllers {
  //listar clientes appget
  static listarCliente = (req, res) => {
    clientes.find((err, clientes) => {
      res.status(200).json(clientes);
    });
  };
  //listar clientes por id
  static listarClientesId = (req, res) => {
    const id = req.params.id;
    clientes.findById(id, (err, clientes) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} - clientes não localizada.` });
      } else {
        res.status(200).send(clientes);
      }
    });
  };
  static listarClientesEmail = (req, res) => {
    const email = req.params.email;
    clientes.findOne({ Email: email }, (err, clientes) => {
      if (err) {
        res
          .status(400)
          .json({ message: `${err.message} - clientes não localizada.` });
      } else {
        res.status(200).json(clientes);
      }
    });
  };

  //cadastrar clientes
  static cadastrarclientes = (req, res) => {
    let cliente = new clientes(req.body);

    cliente.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar cliente.` });
      } else {
        res.status(201).send({
          message: "cliente cadastrada com sucesso",

          Cliente: cliente,
        });
      }
    });
  };
  //atualizar clientes
  static atualizarclientes = (req, res) => {
    const id = req.params.id;

    clientes.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Cliente atualizada com sucesso" });
      } else {
        res.status(500);
        send({ message: err.messasge });
      }
    });
  };

  static excluirClientes = (req, res) => {
    const id = req.params.id;

    clientes.findByIdAndDelete(id, (err) => {
      if (!err) {
        res
          .status(200)
          .send({ message: `Cliente com ID ${id} removida com sucesso` });
      } else {
        res.status(500).send({ message: "ID não localizado" });
      }
    });
  };
}

export default clientesControllers;
