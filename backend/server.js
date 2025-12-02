import express, { json } from 'express';
import cors from 'cors';
import { waitFor } from '@testing-library/dom';
const app = express();
const PORT = 5000;

const mysqlHost = 'localhost';
const mysqlUser = 'root';
const mysqlPassword = 'abc';
const mysqlDatabase = 'userdb';
const mysqlPort = 3306


const dbConfig = {
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase,
    port: mysqlPort,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

import { createPool } from 'mysql2/promise';
const pool = createPool(dbConfig);


app.use(cors());
app.use(json());



app.get('/api/users', async(req, res) => {

});

app.post('/api/users', async(req, res) => {

});

app.put('/api/users/:id', async(req, res) => {

});

app.delete('/api/users/:id', async(req, res) => {

});


app.listen(PORT, () => {
    console.log(`Server running on http: //localhost:${PORT}`);
});