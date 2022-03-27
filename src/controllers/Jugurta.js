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
        `SELECT *
        FROM thia1892_bomsono.Client as C, thia1892_bomsono.Booking as B,thia1892_bomsono.Accommodation as A, thia1892_bomsono.Room as R, thia1892_bomsono.Hotel as H
        WHERE C.client_id=B.client and A.booking=B.booking_id and A.room=R.room_id and R.hotel=H.hotel_id and A.check_in_date > ${checkin} and A.check_in_date < ${checkout} and H.city="Rio de Janeiro"`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },
};
