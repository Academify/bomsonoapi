const {Router} = require('express');

const routes = Router();

routes.get('/', (req, res) => res.send("Api da rede bom sono"))

module.exports = routes;