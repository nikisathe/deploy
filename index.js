const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT // Add this line to specify the database port
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get('/api/data', (req, res) => {
    let sql = 'SELECT * FROM college_list';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
