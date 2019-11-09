'use strict';
module.exports = function(app) {
  var visitor = require('../controller/controller');

  // todoList Routes
  app.route('/visitor/:vistorId')
    .get(visitor.getSpecificVisitor);

  app.route('/visitor/')
    .get(visitor.getAllVisitors);

  app.route('/users/')
      .get(visitor.getAllUsers);

  app.route('/users/:permission_id')
      .get(visitor.getUserByPermission);

  app.route('/properties/')
      .get(visitor.getAllProperty);

  //TODO add delete routes

  //TODO add edit routes

  //TODO add get all residence routes

  //TODO add get specific residence and there visitors for a specific time range routes

  //TODO get all residence and there visitors routes

  //TODO add add vistor routes

  //TODO add add resident routes

  //TODO add edit resident routes

};
