const connection = require("../config/database");

const clientController = {
    list: (req, res) => {
        const query = 'Select * from Address';

        connection.query(query, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Nenhum endereço cadastrado" });
            } else {
                res.status(200).json(results);
            }
        });
    },
    new: (req, res) => {
        const { clientId, street, district, city, houseNumber, zipCode, state, country } = req.body;
        const query = 'Insert into Address (Clientid, street, district, city, houseNumber, zipCode, state, country) values (?,?,?,?,?,?,?,?)';
        const values = [clientId, street, district, city, houseNumber, zipCode, state, country];

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Erro ao adicionar endereço" });
            } else {
                res.status(200).json({ message: "Endereço adicionado com sucesso" });
            }
        });
    },
    edit: (req, res) => {
        const id = req.params.id;
        const { clientId, street, district, city, houseNumber, zipCode, state, country } = req.body;
        const query = 'Update Address set clientId = ?, street = ?, district = ?, city = ?, houseNumber = ?, zipCode = ?, state = ?, country = ? where Addressid = ?';
        const values = [clientId, street, district, city, houseNumber, zipCode, state, country, id];


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
        const query = 'Delete from Address where Addressid = ?';

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(404).json({ message: "Erro ao excluir o endereço" });
            } else {

                res.status(200).json({ message: "Endereço excluído com sucesso" });
            }
        });
    },
    deleteByCliente: (id) => {
        const values = id;
        const query = 'Delete from Address where Clientid = ?';

        connection.query(query, values);
    },
};

module.exports = clientController;