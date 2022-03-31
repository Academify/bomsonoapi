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
        `SELECT * FROM thia1892_bomsono.Cleaning WHERE cleaning_id=${id}`
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
        "SELECT * FROM thia1892_bomsono.Cleaning"
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async post(req, res) {
    const { date, room, employee } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `INSERT INTO thia1892_bomsono.Cleaning (date, room, employee) VALUES (?,?,?)`,
        [date, room, employee]
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },

  async patch(req, res) {
    const { id } = req.query;
    var { date, room, employee } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });

      try {
        var picked = await connection.query(
        `SELECT * FROM thia1892_bomsono.Cleaning WHERE cleaning_id=${id}`
      );
      } catch (err) {
        var rows = err;
      }

      var treatedDate = (picked[0].date).toISOString();

      if(!req.body.date) date = treatedDate.susbtring(0,10);
      if(!req.body.room) room = picked[0].room;
      if(!req.body.employee) employee = picked[0].employee;

      var rows = await connection.query(
        `UPDATE thia1892_bomsono.Cleaning SET  date=${date}, room = ${room}, employee=${employee} WHERE cleaning_id = ${id};`
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
        `DELETE FROM thia1892_bomsono.Cleaning WHERE cleaning_id=${id};`
      );
    } catch (err) {
      var rows = err;
    }

    connection.destroy();

    res.json(rows);
  },
};
