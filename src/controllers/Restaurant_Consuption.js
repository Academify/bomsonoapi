const mariadb = require('mariadb');

module.exports = {
    async getByID(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`SELECT * FROM thia1892_bomsono.Restaurant_Consumption WHERE rest_comp_id=${id}`);        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async getAll(req, res) {
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query('SELECT * FROM thia1892_bomsono.Restaurant_Consumption');        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async post(req, res) {
        const {price, delivered, date, accomm} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`INSERT INTO thia1892_bomsono.Restaurant_Consumption (price, delivered, date, accomm) VALUES (?,?,?,?)`, [price, delivered, date, accomm]);
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async patch(req, res) {
        const {id} = req.query;
        const {price, delivered, date, accomm} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`UPDATE thia1892_bomsono.Restaurant_Consuption
            SET price = ${price}, delivered = ${delivered}, date = ${date}, accomm = ${accomm} 
            WHERE rest_comp_id = ${id};`,
        );
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async delete(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`DELETE FROM thia1892_bomsono.Restaurant_Consumption WHERE rest_comp_id=${id}`);        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    }
}