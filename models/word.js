"use strict";
const path = require('path');
const tableName = path.basename(__filename, '.js');
const moment = require('moment');

module.exports = function(db, DataTypes) {
    return db.define(tableName, {
        date: {
            type: DataTypes.DATEONLY,
            primaryKey: true
        },
        category: DataTypes.STRING,
        word: DataTypes.STRING,
        definition: DataTypes.STRING,
        synonyms: DataTypes.STRING
    },  {
        classMethods: {
            associate: function(models) {
                this.hasMany(models.Comment);
            },
            wordRequest: function(date, range) {
                return this.findAll({
                    where: {
                        date: {
                            $lt: moment(date).add(2, 'days').format('YYYY-MM-DD'),
                            $gt: moment(date).subtract(range, 'days').format('YYYY-MM-DD')
                        }
                    }
                })
            }
        }
    });
};
