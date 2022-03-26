const mariadb = require(`mariadb`);

module.exports = {
  async queryA(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var checkin = "2022-02-26";
      var checkout = "2022-03-01";
      var rows = await connection.query(
        `SELECT name FROM thia1892_bomsono.Client as C, thia1892_bomsono.Booking as B,thia1892_bomsono.Accommodation as A  WHERE client_id=${id}`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    return res.json();
  },
};
