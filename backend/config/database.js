const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'mainuser',
    password: 'UserPassword2',
    database: 'KabumChallenge',
});

connection.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        return;
    }
    console.log('Conexão com o banco de dados MySQL estabelecida com sucesso!');
});

module.exports = connection;