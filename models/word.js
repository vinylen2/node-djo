"use strict";
const Sequelize = require('sequelize');
const db = require ('../db/db.js');

const Word = db.define('word', {
    date: {
        type: Sequelize.DATEONLY,
        primaryKey: true
    },
    category: {
        type: Sequelize.STRING
    },
    word: {
        type: Sequelize.STRING
    },
    definition: {
        type: Sequelize.STRING
    },
    synonyms: {
        type: Sequelize.STRING
    }
}, {
    getterMethods: {
        findByWord: function(word) {
            return this.findAll({
                where: {
                    word: word
                }
            })
        }
    }
});

module.exports = Word;
