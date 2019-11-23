'use strict';
module.exports = function(app) {
  let taskObject = require('../controller/controller');

  //**************Authentication endpoints*****************
 app.route('/user/login')
     .post(taskObject.authenticateUser);

  //**************Admin endpoints*****************
  app.route('/users/')
      .get(taskObject.getAllUsers);

  app.route('/visitor/')
      .get(taskObject.getAllVisitors);

  app.route('/users/:permission_id')
      .get(taskObject.getUserByPermission);

  app.route('/visitor/:vistorId')
    .get(taskObject.getSpecificVisitor);

  app.route('/user/register')
      .post(taskObject.registerUser);

  //**************Super admin endpoints*****************
  app.route('/properties/')
      .get(taskObject.getAllProperty);

};
