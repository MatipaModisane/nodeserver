'use strict';

var TaskObject = require('../model/model');


//*****************************************authentication related functions*********************************************
exports.authenticateUser = function(req, res) {

  TaskObject.authenticateUser( req.body , function (err, user) {
    user = req.body;
    if (err)
      res.send(err);
    res.json(true);
    console.log('Authenticate user endpoint hit: ', user);
  });

}


//*****************************************admin related functions******************************************************

//user related
exports.getAllUsers = function(req, res) {

  TaskObject.getAllUsers(function (err, permission) {
    if (err)
      res.send(err);
    res.json(permission);
    console.log('Get all users endpoint hit: ', permission);
  });

}

exports.registerUser = function(req, res) {

  TaskObject.registerUser( req.body ,function (err, user) {
    user = req.body;
    if (err)
      res.send(err);
    res.json(true);
    console.log('Create user endpoint hit: ', user);
  });

}

exports.getUserByPermission = function(req, res) {

  TaskObject.getUserByPermission (req.params.permission_id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
    console.log('Get visitors by id endpoint hit: ', user);
  });

}

//visitor related
exports.getSpecificVisitor = function(req, res) {

  TaskObject.getVisitorById(req.params.vistorId, function (err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
    console.log('Get visitors by id endpoint hit: ', visitor);
  });

}


exports.getAllVisitors = function(req, res) {

  TaskObject.getAllVisitors(function (err, visitor) {
    if (err)
      res.send(err);
    res.json(visitor);
    console.log('Get all visitors endpoint hit: ', visitor);
  });

}

//*****************************************super admin related functions******************************************************

//property related
exports.getAllProperty = function(req, res) {

  TaskObject.getAllProperty(function (err, property) {
    if (err)
      res.send(err);
    res.json(property);
    console.log('Get all users endpoint hit: ', property);
  });

}

