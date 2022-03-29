const mariadb = require('mariadb');

module.exports = {
    async getByID(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`SELECT * FROM thia1892_bomsono.Room_Type WHERE room_type_id=${id}`);        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async getAll(req, res) {
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query('SELECT * FROM thia1892_bomsono.Room_Type');        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async post(req, res) {
        const {num_double_bed, num_single_bed, special_needs, has_tv, has_fridge, daily_price} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(
                `INSERT INTO thia1892_bomsono.Room_Type (num_double_bed, num_single_bed, special_needs, has_tv, has_fridge, daily_price) VALUES (?,?,?,?,?,?)`, 
                [num_double_bed, num_single_bed, special_needs, has_tv, has_fridge, daily_price]
            );
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    },

    async patch(req, res) {
        const {id} = req.query;
        const {num_double_bed, num_single_bed, special_needs, has_tv, has_fridge, daily_price} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`UPDATE thia1892_bomsono.Room_Type
            SET num_double_bed = ${num_double_bed}, num_single_bed = ${num_single_bed}, special_needs = ${special_needs}, 
            has_tv = ${has_tv}, has_fridge = ${has_fridge}, daily_price = ${daily_price}
            WHERE room_type_id = ${id};`
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
            var rows = await connection.query(`DELETE FROM thia1892_bomsono.Room_Type WHERE room_type_id=${id}`);        
        } catch(err) {
            var rows = err;
        }

        connection.destroy();
        
        res.json(rows);
    }
}