const {Router} = require('express');

const products = require('./controllers/Product');
const invoice = require('./controllers/Invoice');
const address = require('./controllers/Address');
const hotel = require('./controllers/Hotel');

const routes = Router();

routes.get('/', (req, res) => res.send("Api da rede bom sono"));

// CRUD Products
routes.get('/allproducts', products.getAll); // retorna todos os produtos
routes.get('/product', products.getByID); // retorna produto específico
routes.post('/product', products.post);
routes.delete('/product', products.delete);
//routes.patch('/product', products.patch); // TIRAR DÚVIDA

// CRUD Invoice
routes.get('/allinvoices', invoice.getAll); // retorna todos os produtos
routes.get('/invoice', invoice.getByID); // retorna produto específico
routes.post('/invoice', invoice.post);
routes.delete('/invoice', invoice.delete);
//routes.patch('/invoice', invoice.patch); // TIRAR DÚVIDA

// CRUD Address
routes.get('/alladdresses', address.getAll); // retorna todos os produtos
routes.get('/address', address.getByID); // retorna produto específico
routes.post('/address', address.post);
routes.delete('/address', address.delete);
//routes.patch('/address', address.patch); // TIRAR DÚVIDA

// CRUD Hotel
routes.get('/allhotels', hotel.getAll); // retorna todos os produtos
routes.get('/hotel', hotel.getByID); // retorna produto específico
routes.post('/hotel', hotel.post);
routes.delete('/hotel', hotel.delete);
//routes.patch('/hotel', hotel.patch); // TIRAR DÚVIDA

module.exports = routes;