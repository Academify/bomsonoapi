const {Router} = require('express');

const address = require('./controllers/Address');
const hotel = require('./controllers/Hotel');
const invoice = require('./controllers/Invoice');
const office = require('./controllers/Office');
const product = require('./controllers/Product');
const room_type = require('./controllers/Room_Type');

const routes = Router();

routes.get('/', (req, res) => res.send("Api da rede bom sono"));

// CRUD Address
routes.get('/all-addresses', address.getAll);
routes.get('/address', address.getByID);
routes.post('/address', address.post);
routes.delete('/address', address.delete);
//routes.patch('/address', address.patch); // TIRAR DÚVIDA

// CRUD Hotel
routes.get('/all-hotels', hotel.getAll);
routes.get('/hotel', hotel.getByID);
routes.post('/hotel', hotel.post);
routes.delete('/hotel', hotel.delete);
//routes.patch('/hotel', hotel.patch); // TIRAR DÚVIDA

// CRUD Invoice
routes.get('/all-invoices', invoice.getAll);
routes.get('/invoice', invoice.getByID);
routes.post('/invoice', invoice.post);
routes.delete('/invoice', invoice.delete);
//routes.patch('/invoice', invoice.patch); // TIRAR DÚVIDA

// CRUD Office
routes.get('/all-offices', office.getAll);
routes.get('/office', office.getByID);
routes.post('/office', office.post);
routes.delete('/office', office.delete);
//routes.patch('/office', office.patch); // TIRAR DÚVIDA

// CRUD Product
routes.get('/all-products', product.getAll);
routes.get('/product', product.getByID);
routes.post('/product', product.post);
routes.delete('/product', product.delete);
//routes.patch('/product', product.patch); // TIRAR DÚVIDA

// CRUD Room Types
routes.get('/all-room-types', room_type.getAll);
routes.get('/room-type', room_type.getByID);
routes.post('/room-type', room_type.post);
routes.delete('/room-type', room_type.delete);
//routes.patch('/room-type', room_type.patch); // TIRAR DÚVIDA


module.exports = routes;