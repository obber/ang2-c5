// load in babel polyfills to transpile on the fly
require('babel-register');
require('babel-polyfill');

var sequelize = require('../server/db').sequelize;
// load all models to ensure proper syncing
require('../server/models');

sequelize
  .authenticate()
  .then(function() {
    sequelize
      .sync()
      .then(function() {
        require('../server');
      })
  })
  .catch(function(e) {
    console.error('unable to connect to database. e = ', e);
  });