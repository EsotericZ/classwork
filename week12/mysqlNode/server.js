const express = require('express');
const connection = require('./connection')

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/students', (req, res) => {
    connection.query('SELECT * FROM students;', (err, results) => {
        if (err) {
            return res.status(401).json(err);
        }
        res.json(results);
    });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));