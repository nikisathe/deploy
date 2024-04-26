const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'college'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM college_list';
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result);
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
