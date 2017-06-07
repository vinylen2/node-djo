"use strict";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var fs         = require('fs');
var path       = require('path');
var Sequelize  = require('sequelize');
var config     = require(__dirname + '/../config.json').sequelize;
var connection = new Sequelize(config.database, config.username, config.password, config.extra);
var db         = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach(function(file) {
    var model = connection['import'](path.join(__dirname, file));
    db[capitalizeFirstLetter(model.name)] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.connection = connection;
db.Sequelize = Sequelize;

module.exports = db;
