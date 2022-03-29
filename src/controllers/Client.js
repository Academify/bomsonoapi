const mariadb = require("mariadb");

module.exports = {
  async getByID(req, res) {
    const { id } = req.query;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT * FROM thia1892_bomsono.Client WHERE client_id=${id}`
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async getAll(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT * FROM thia1892_bomsono.Client`
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async post(req, res) {
    const { client_name, email, phone, password, nationality, addr } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `INSERT INTO thia1892_bomsono.Client (client_name, email, phone, password, nationality, addr) VALUES (?,?,?,?,?,?)`,
        [client_name, email, phone, password, nationality, addr]
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async patch(req, res) {
    const { id } = req.query;
    const { client_name, email, phone, password, nationality, addr } = req.body;

    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `UPDATE thia1892_bomsono.Client
         SET client_name = ${client_name}, email = ${email}, phone = ${phone}, password = ${password}, nationality =${nationality}, addr = ${addr}
         WHERE client_id = ${id};`,
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async delete(req, res) {
    const { id } = req.query;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `DELETE FROM thia1892_bomsono.Client WHERE client_id=${id}`
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },
};
