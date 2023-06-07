const connection = require("../config/database");

const sessionsController = {
    login: (req, res) => {
        const { email, password } = req.body;
        const query = 'SELECT * FROM User WHERE email = ? AND password = ?';
        const values = [email, password];

        connection.query(query, values, (error, results) => {
            if (results.length === 0) {
                res.status(401).json({ message: "Invalid email or password" });
            } else {
                res.status(200).json({ message: "Login Successful" });
            }
        });
    },
};

module.exports = sessionsController;