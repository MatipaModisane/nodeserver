'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'gatekeepr'
});

connection.connect(function(err) {
  if (err) {
    console.log("Connection to database has failed! ", err);
    throw err;
  }
  console.log('Connection to database has been established');
});

module.exports = connection;
