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
        `SELECT * FROM thia1892_bomsono.Client`
      );
    } catch (err) {
      var rows = "failed!";
    }

    connection.destroy();

    res.json(rows);
  },

  async post(req, res) {
    const { name, email, phone, password, nationality, addr } = req.body;
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `INSERT INTO thia1892_bomsono.Client (name, email, phone, password, nationality, addr) VALUES (?,?,?,?,?,?)`,
        [name, email, phone, password, nationality, addr]
      );
    } catch (err) {
      console.log(err);
    }

    connection.destroy();

    res.json(rows);
  },

  /*async patch(req, res) {
        const {id, name, price} = req.query;
        try {
            var connection = await mariadb.createConnection({host: process.env.HOST, user: process.env.USER, password: process.env.PASSWORD});
            var rows = await connection.query(`UPDATE thia1892_bomsono.Product SET Nome_Livro = 'SSH, o Shell Seguro' WHERE ID_LIVRO = 101;`, [name, price]);
        } catch(err) {
            var rows = "failed!";
        }

        connection.destroy();
        
        res.json("Worked!");
    },*/

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
      var rows = "failed!";
    }

    connection.destroy();

    res.json(rows);
  },
};
