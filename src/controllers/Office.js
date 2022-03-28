const mariadb = require('mariadb');

module.exports = {
    async getByID(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`SELECT * FROM thia1892_bomsono.Office WHERE office_id=${id}`);        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json(rows);
    },

    async getAll(req, res) {
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query('SELECT * FROM thia1892_bomsono.Office');        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json(rows);
    },

    async post(req, res) {
        const {name, wage} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`INSERT INTO thia1892_bomsono.Office (name, wage) VALUES (?,?)`, [name, wage]);
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Worked!");
    },

    async patch(req, res) {
        const {id} = req.query;
        const {name, wage} = req.body;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(
                `UPDATE thia1892_bomsono.Office 
                SET name = '${name}', wage = ${wage} 
                WHERE office_id = ${id};`
            );
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Worked!");
    },

    async delete(req, res) {
        const {id} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`DELETE FROM thia1892_bomsono.Office WHERE office_id=${id}`);        
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Deleted!");
    }
}