// require mySql
const mysql = require('mysql');
// setting up connection
var connection;

// if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection('mysql://yiic6e84fs3alufa:dm8xcu4q3uky0zmt@mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/i90hfnh771wu8hbu');
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'burgers_db'
//   })
// }

// establishing connection
connection.connect(function (err) {
  if (err) {
    console.error('Connection error: ' + err.stack);
  };
  console.log('Connection id: ' + connection.threadId);
  return;
});
// export connection
module.exports = connection;