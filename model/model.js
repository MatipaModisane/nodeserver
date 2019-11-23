'user strict';
var sql = require('../database.js');

//Task object constructor
var TaskObject = function(visitor){

};

//*****************************************Authentication related model******************************************************

//user models
TaskObject.authenticateUser = function (user ,result) {

  console.log("Authenticating user...");
  console.log(user.username);
  sql.query("Select * from user;", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.length);
      for (let i = 0; i < res.length; i++) {
        if (user.username === res[i].username) {
          console.log("Username has been found!");
        }
      }
    }

    result(null, res);

  });

};



//*****************************************Admin related model******************************************************

//user models
TaskObject.getAllUsers = function (result) {

  console.log("Getting all users...");

  sql.query("Select * from user;", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });

};

TaskObject.getUserByPermission = function (permission_id , result) {

  console.log("Getting users by permission...");

  sql.query("Select * from user;",function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });

};

TaskObject.registerUser = function (user, result) {

  console.log("Creating new user...");

  var values = [
    [user.username, user.fullname, user.cellnumber, user.permissionrole, user.password, Date.now(), user.enabled]
  ];

  sql.query("INSERT INTO user (username, full_name, cell_number, permission_role, password, registration_date, enabled) VALUES ?;"
      , [values],  function (err, res) {
        if(err) {
          console.log("error: ", err);
          result(err, null);
          res.send(err);
        }
        else{
          result(null, res);
        }
      });

};

//visitor models
TaskObject.getAllVisitors = function (result) {

  console.log("Getting all visitors...");

  sql.query("Select * from visitor;", function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });

};


TaskObject.getVisitorById = function (vistorId, result) {

  console.log("Getting visitor by id...");

  sql.query("Select * from visitor where id = ?", vistorId, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });

};

//*****************************************Super admin related model******************************************************

//property models
TaskObject.getAllProperty = function (result) {

  console.log("Getting all properties...");

  sql.query("Select * from property;",function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });

};

// Visitor.getAllPropertyForUser = function ( userId, result) {
//   sql.query("Select * from user where permission_role = 4 ",function (err, res) {
//     if(err) {
//       console.log("error: ", err);
//       result(err, null);
//     }
//     else{
//       result(null, res);
//     }
//   });
// };



module.exports = TaskObject;

