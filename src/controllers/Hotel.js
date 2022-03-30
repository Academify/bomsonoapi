const mariadb = require('mariadb');

module.exports = {
    async getByID(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({
                host: process.env.HOST,
                user: process.env.USER,
                password: process.env.PASSWORD
            });
            var rows = await connection.query(
                `SELECT * FROM thia1892_bomsono.Hotel WHERE hotel_id=${id}`
            );        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async getAll(req, res) {
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query('SELECT * FROM thia1892_bomsono.Hotel');        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async post(req, res) {
        const {city, state} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`INSERT INTO thia1892_bomsono.Hotel (city, state) VALUES (?,?)`, [city, state]);
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async patch(req, res) {
        const {id}  = req.query;
        const {city, state} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(
                `UPDATE thia1892_bomsono.Hotel 
                SET city = ${city}, state = ${state}' 
                WHERE hotel_id = ${id};`
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
            var rows = await connection.query(`DELETE FROM thia1892_bomsono.Hotel WHERE hotel_id=${id}`);        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    }
}