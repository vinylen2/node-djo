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

function createWord() {

}

db.sync()
    .then(() => {
        console.log("Connection established");
        return Word.create({
            date: "2017-06-04",
            category: "substantiv",
            word: "tennis",
            definition: "En bollsport som spelas med rack och boll",
            synonyms: ""
        });
    })
    .catch((err) => {
        throw err;
    });
