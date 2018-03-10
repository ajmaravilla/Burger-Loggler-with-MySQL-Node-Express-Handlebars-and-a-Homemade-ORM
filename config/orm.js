// require connection.js
const connection = require('./connection.js');

// Helper function for SQL syntax
// Question marks to string for my SQL query - ['?', '?', '?'].toString() +> '?,?,?';
function printQuestionMarks(num) {
  var arr = [];

  for (var i=0; i < num; i++) {
    arr.push('?');
  }
  return arr.toString();
};
// Convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = '"' + value + '"';
      }
      arr.push(key + '=' + value);
    }
  }
  return arr.toString();
};

// create methods to execute MySQL commands, SQL statement functions
var orm = {
  // selectAll()
  selectAll: function(tableInput, cb) {
    var queryString = 'SELECT * FROM ' + tableInput + ';';
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result); // call back function for results
    });
  },
  // insertOne()
  insertOne: function(table, cols, vals, cb) {
    var queryString = 'INSERT INTO ' + table;
    // queryStrings
    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // updateOne()
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = 'UPDATE ' + table;
    // queryStrings
    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// export ORM object
module.exports = orm;