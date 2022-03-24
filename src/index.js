const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000 🔥`)
});