const {Router} = require('express');

const products = require('./controllers/Product.js');

const routes = Router();

routes.get('/', (req, res) => res.send("Api da rede bom sono"));

// CRUD Products
routes.get('/allproducts', products.getAll); // retorna todos os produtos
routes.get('/product', products.getByID); // retorna produto específico
routes.post('/product', products.post);
routes.delete('/product', products.delete);
//routes.patch('/product', products.patch); // TIRAR DÚVIDA

module.exports = routes;