const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = process.env.PORT || 3000;

const connection = mysql.createConnection
({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tp_practicas'
});


// Connection to DB
connection.connect((err) => 
{
    if (err)
    {
        console.log('Error connectiong to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Use "cors"
app.use(cors({
    origin: 'http://127.0.0.1:5500/'
}));

// Definición a la ruta "Provinces"
app.get('/definitiveprovince/all', (req, res) => {

    const query = 'SELECT * FROM definitiveprovince';

    connection.query(query, (err, results) =>
    {
        if (err)
        {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.json(results);
    });
});

// Definición a la ruta "Departments"
app.get('/definitivedepartment/all', (req, res) => {

    const query = 'SELECT * FROM definitivedepartment';

    connection.query(query, (err, results) =>
    {
        if (err)
        {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.json(results);
    });
});

// Definición a la ruta "Municipalities"
app.get('/definitivemunicipality/all', (req, res) => {

    const query = 'SELECT * FROM definitivemunicipality';

    connection.query(query, (err, results) =>
    {
        if (err)
        {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.json(results);
    });
});

// Definición a la ruta "Locations"
app.get('/definitivelocation/all', (req, res) => {

    const query = 'SELECT * FROM definitivelocation';

    connection.query(query, (err, results) =>
    {
        if (err)
        {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Error fetching data from the database');
            return;
        }
        res.json(results);
    });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


