'user strict';
var sql = require('../database.js');

//Task object constructor
var Visitor = function(visitor){

};

Visitor.getVisitorById = function (vistorId, result) {
  sql.query("Select * from visitor where visitor_id = ?", vistorId, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};


Visitor.getAllVisitors = function (result) {
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

//TODO add delete models

//TODO add edit models

//TODO add get all residence models

//TODO add get specific residence and there visitors for a specific time range models

//TODO get all residence and there visitors models

//TODO add add vistor models

//TODO add add resident models

//TODO add edit resident models




module.modelss = Visitor;

