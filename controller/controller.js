'use strict';

var Visitor = require('../model/model');

exports.getSpecificVisitor = function(req, res) {

  Visitor.getVisitorById(req.params.vistorId, function (err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
    console.log('Get visitors by id endpoint hit: ', visitor);
  });
}


exports.getAllVisitors = function(req, res) {

  Visitor.getAllVisitors(function (err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
    console.log('Get all visitors endpoint hit: ', visitor);
  });
}


//TODO add delete export

//TODO add edit export

//TODO add get all residence export

//TODO add get specific residence and there visitors for a specific time range export

//TODO get all residence and there visitors export

//TODO add add vistor export

//TODO add add resident export

//TODO add edit resident export

