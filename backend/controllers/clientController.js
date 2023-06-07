const connection = require("../config/database");
const addressController = require('../controllers/addressController');

const clientController = {
    list: (req, res) => {
        const query = 'Select * from Client';

        connection.query(query, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Nenhum cliente cadastrado" });
            } else {
                res.status(200).json(results);
            }
        });
    },
    new: (req, res) => {
        const { clientName, dateOfBirth, cpf, rg, phone } = req.body;
        const query = 'Insert into Client (Name, DOB, CPF, RG, Phone) values (?, ?, ?, ?, ?)';
        const values = [clientName, dateOfBirth, cpf, rg, phone];

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Erro ao adicionar cliente" });
            } else {
                res.status(200).json({ message: "Cliente cadastrado com sucesso" });
            }
        });
    },
    edit: (req, res) => {
        const { clientName, dateOfBirth, cpf, rg, phone } = req.body;
        const id = req.params.id
        const query = 'Update Client set clientName = ?, dateOfBirth = ?, cpf = ?, rg = ?, phone = ? where Clientid = ?';
        const values = [clientName, dateOfBirth, cpf, rg, phone, id];

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Erro ao adicionar cliente" });
            } else {
                res.status(200).json({ message: "" });
            }
        });
    },
    delete: (req, res) => {
        const values = req.params.id;
        const query = 'Delete from Client where Clientid = ?';

        addressController.deleteByCliente(values);

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Cliente não encontrado" });
            } else {
                res.status(200).json({ message: "Cliente excluído com sucesso" });
            }
        });
    },
};

module.exports = clientController;