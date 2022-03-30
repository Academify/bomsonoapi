const mariadb = require(`mariadb`);

module.exports = {
  async queryA(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT *
        FROM thia1892_bomsono.Client as C, thia1892_bomsono.Booking as B,thia1892_bomsono.Accommodation as A, thia1892_bomsono.Room as R, thia1892_bomsono.Hotel as H
        WHERE C.client_id=B.client and A.booking=B.booking_id and A.room=R.room_id and R.hotel=H.hotel_id and A.check_in_date > "2022-02-26" and A.check_in_date < "2022-03-01" and H.city="Rio de Janeiro"`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  async queryB(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT *
        FROM thia1892_bomsono.Employee as E, thia1892_bomsono.Cleaning as C, thia1892_bomsono.Room as R, thia1892_bomsono.Hotel as H 
        WHERE H.hotel_id=R.hotel and R.room_id = C.room and E.employee_id = C.employee and C.date > "2022-02-26" and C.date < "2022-03-01" and H.city ="Rio de Janeiro";`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  async queryC(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT *
        FROM thia1892_bomsono.Client as CL, thia1892_bomsono.Booking as B, thia1892_bomsono.Accommodation as A, thia1892_bomsono.Room as R, thia1892_bomsono.Hotel as H, thia1892_bomsono.Consumption as CO, thia1892_bomsono.Product as P
        WHERE CL.client_id =B.client and B.booking_id = A.booking and A.acc_id = CO.accomm and CO.product = P.product_id and A.room = R.room_id and R.hotel = H.hotel_id and P.name = "Red Bull"
        GROUP BY CL.client_id;`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  async queryD(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        ``
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  async queryE(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        ``
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  async queryF(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        ``
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },

  //Liste os clientes mais fieis ao hotel gastaram mais em
  async queryQ(req, res) {
    try {
      var connection = await mariadb.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
      });
      var rows = await connection.query(
        `SELECT CL.client_name, A.check_in_date, A.check_out_date, RT.daily_price, SUM(@total_price := DATEDIFF(A.check_out_date, A.check_in_date)*RT.daily_price) as total
        FROM thia1892_bomsono.Client as CL, thia1892_bomsono.Booking as B, thia1892_bomsono.Accommodation as A, thia1892_bomsono.Room_Type as RT
        WHERE CL.client_id = B.client and B.booking_id = A.booking and B.booked_room_type = RT.room_type_id
        GROUP BY CL.client_id
        ORDER BY total DESC ;`
      );
    } catch (err) {
      var rows = err;
    }
    connection.destroy();
    res.json(rows);
  },
};
