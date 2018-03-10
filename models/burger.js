// import orm.js into burger.js
const orm = require('../config/orm.js');

// create code that will call the ORM functions using burger specific input for the ORM
var burger = {
  selectAll: function(cb) {
    // selectAll: function(tableInput, cb)
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },
  insertOne: function(name, cb) {
    // insertOne: function(table, cols, vals, cb) 
    orm.insertOne('burgers', ['burger_name', 'devoured'], [name, false], cb);
  },
  updateOne: function(id, cb){
    var condition = 'id=' + id;
    // updateOne: function(table, objColVals, condition, cb)
    orm.updateOne('burgers', {devoured: true}, condition, cb);
  }
};

// export
module.exports = burger;