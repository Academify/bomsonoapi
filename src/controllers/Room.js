const mariadb = require('mariadb');

module.exports = {
    async getByID(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`SELECT * FROM thia1892_bomsono.Room WHERE room_id=${id}`);        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json(rows);
    },

    async getAll(req, res) {
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query('SELECT * FROM thia1892_bomsono.Room');        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json(rows);
    },

    async post(req, res) {
        const {number, room_type, hotel} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`INSERT INTO thia1892_bomsono.Room (number, room_type, hotel) VALUES (?,?,?)`, [number, room_type, hotel]);
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Worked!");
    },

    /*async patch(req, res) {
        const {id} = req.query;
        const {number, room_type, hotel} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(
                `UPDATE thia1892_bomsono.Room SET name = '${name}', wage = ${wage} WHERE room_id = ${id};`
            );
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Worked!");
    },*/

    async delete(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`DELETE FROM thia1892_bomsono.Room WHERE room_id=${id}`);        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Deleted!");
    }
}