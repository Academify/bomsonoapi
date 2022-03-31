const {Router} = require('express');

const address = require('./controllers/Address');
const accommodation = require('./controllers/Accommodation');
const booking = require('./controllers/Booking');
const cleaning = require('./controllers/Cleaning');
const client = require('./controllers/Client');
const consumption = require('./controllers/Consumption');
const employee = require('./controllers/Employee');
const hotel = require('./controllers/Hotel');
const invoice = require('./controllers/Invoice');
const jugurta = require('./controllers/Jugurta');
const office = require('./controllers/Office');
const product = require('./controllers/Product');
const restaurant_consuption = require('./controllers/Restaurant_Consuption');
const room_type = require('./controllers/Room_Type');
const room = require('./controllers/Room');

const routes = Router();

routes.get('/', (req, res) => res.send("Api da rede bom sono"));

// CRUD Address
routes.get('/all-addresses', address.getAll);
routes.get('/address', address.getByID);
routes.post('/address', address.post);
routes.delete('/address', address.delete);
//routes.patch('/address', address.patch); // TIRAR DÚVIDA

// CRUD Accommodation
routes.get('/all-accommodations', accommodation.getAll);
routes.get('/accommodation', accommodation.getByID);
routes.post('/accommodation', accommodation.post);
routes.delete('/accommodation', accommodation.delete);
routes.patch('/accommodation', accommodation.patch); // TIRAR DÚVIDA

// CRUD Booking
routes.get('/all-bookings', booking.getAll);
routes.get('/booking', booking.getByID);
routes.post('/booking', booking.post);
routes.delete('/booking', booking.delete);
//routes.patch('/booking', booking.patch); // TIRAR DÚVIDA

// CRUD Cleaning
routes.get('/all-cleanings', cleaning.getAll);
routes.get('/cleaning', cleaning.getByID);
routes.post('/cleaning', cleaning.post);
routes.delete('/cleaning', cleaning.delete);
//routes.patch('/cleaning', cleaning.patch); // TIRAR DÚVIDA

// CRUD Employee
routes.get('/all-employees', employee.getAll);
routes.get('/employee', employee.getByID);
routes.post('/employee', employee.post);
routes.delete('/employee', employee.delete);
//routes.patch('/employee', employee.patch); // TIRAR DÚVIDA

// CRUD Client
routes.get('/all-clients', client.getAll);
routes.get('/client', client.getByID);
routes.post('/client', client.post);
routes.delete('/client', client.delete);
//routes.patch('/client', client.patch); // TIRAR DÚVIDA

// CRUD Consumption
routes.get('/all-consumptions', consumption.getAll);
routes.get('/consumption', consumption.getByID);
routes.post('/consumption', consumption.post);
routes.delete('/consumption', consumption.delete);
//routes.patch('/consumption', consumption.patch); // TIRAR DÚVIDA

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
routes.post('/generateInvoice', invoice.generateInvoice);
// routes.patch('/invoice', invoice.patch);

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
routes.get('/all-restaurant-consuptions', restaurant_consuption.getAll);
routes.get('/restaurant-consuption', restaurant_consuption.getByID);
routes.post('/restaurant-consuption', restaurant_consuption.post);
routes.delete('/restaurant-consuption', restaurant_consuption.delete);
//routes.patch('/room-type', room_type.patch); // TIRAR DÚVIDA

// CRUD Room Types
routes.get('/all-room-types', room_type.getAll);
routes.get('/room-type', room_type.getByID);
routes.post('/room-type', room_type.post);
routes.delete('/room-type', room_type.delete);
//routes.patch('/room-type', room_type.patch); // TIRAR DÚVIDA

// CRUD Room
routes.get('/all-rooms', room.getAll);
routes.get('/room', room.getByID);
routes.post('/room', room.post);
routes.delete('/room', room.delete);
//routes.patch('/room', room.patch); // TIRAR DÚVIDA


//Requisições obrigatórias do Projeto
routes.get('/queryA', jugurta.queryA);
routes.get('/queryB', jugurta.queryB)
routes.get('/queryC', jugurta.queryC)
routes.get('/queryD', jugurta.queryD)
routes.get('/queryE', jugurta.queryE)
routes.get('/queryF', jugurta.queryF)
routes.get('/queryQ', jugurta.queryQ)

module.exports = routes;