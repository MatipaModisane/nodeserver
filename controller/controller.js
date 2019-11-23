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

exports.getAllUsers = function(req, res) {

  Visitor.getAllUsers(function (err, permission) {
    if (err)
      res.send(err);
    res.json(permission);
    console.log('Get all users endpoint hit: ', permission);
  });

}

exports.registerUser = function(req, res) {

  Visitor.registerUser( req.body ,function (err, user) {
    user = req.body;
    if (err)
      res.send(err);
    res.json("Sucessful insert of new user");
    console.log('Create user endpoint hit: ', user);
  });

}



exports.getUserByPermission = function(req, res) {

  Visitor.getUserByPermission (req.params.permission_id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
    console.log('Get visitors by id endpoint hit: ', user);
  });

}


exports.getAllProperty = function(req, res) {

  Visitor.getAllProperty(function (err, property) {
    if (err)
      res.send(err);
    res.json(property);
    console.log('Get all users endpoint hit: ', property);
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

