"use strict";
const Sequelize = require('sequelize');

const db  = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    storage: './db/djo.db'
});

module.exports = db;

const Word = require('../models/word');
const uComment = require('../models/comment');

Word.hasMany(uComment);
uComment.belongsTo(Word);
