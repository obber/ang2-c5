require('babel-register');
require('babel-polyfill');
var fs = require('fs');
var path = require('path');

/**
 *
 *  Schema Utility Executable:
 *  @param {command line arg}
 *
 *  run this as a command line utility:
 *    node bin/schema.js
 *    node bin/schema.js force
 *
 *  The force argument will drop any existing tables and recreate the schema.
 *
 */
try {
  var pathToDbConfig = path.resolve('server/db/db.js');
  fs.accessSync(pathToDbConfig, fs.F_OK);
} catch (e) {
  console.error('Looks like the db.js file doesn\'t exist.');
  console.error('e = ', e.toString());
  process.exit();
}

var sequelize = require('../server/db/db.js').sequelize;
require('../server/models');

var force = process.argv[2] === 'force';

if (force) {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log('Dropped tables and recreated tables in db.js');
      process.exit();
    });
} else if (!force && process.argv.length === 2) {
  sequelize
    .sync()
    .then(() => {
       console.log("Created tables in db.js");
       process.exit();
    });
} else {
  console.error('invalid number of arguments in schema.js. Exiting!');
  process.exit();
}