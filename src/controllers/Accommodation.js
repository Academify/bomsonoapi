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
        `SELECT * FROM thia1892_bomsono.Accommodation WHERE acc_id=${id}`
      );
    } catch (err) {
      var rows = "failed!";
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
        "SELECT * FROM thia1892_bomsono.Accommodation"
      );
    } catch (err) {
      var rows = "failed!";
    }

    connection.destroy();

    res.json(rows);
  },

  async post(req, res) {
    const { check_in_date, check_out_date, booking, room } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `INSERT INTO thia1892_bomsono.Accommodation (check_in_date, check_out_date, booking, room) VALUES (?,?,?,?)`,
        [check_in_date, check_out_date, booking, room]
      );
    } catch (err) {
      console.log(err);
    }

    connection.destroy();

    res.json(rows);
  },

  async patch(req, res) {
    const { id } = req.query;
    const { check_in_date, check_out_date, booking, room } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `UPDATE thia1892_bomsono.Accommodation 
        SET check_in_date = ${check_in_date}, check_out_date = ${check_out_date}, booking = ${booking}, room =${room}
        WHERE acc_id = ${id};`,
      );
    } catch (err) {
      var rows = "failed!";
    }

    connection.destroy();

    res.json("Worked!");
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
        `DELETE FROM thia1892_bomsono.Accommodation WHERE acc_id=${id}`
      );
    } catch (err) {
      var rows = "failed!";
    }

    connection.destroy();

    res.json("Deleted!");
  },
};
