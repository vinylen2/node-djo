"use strict";
const path = require('path');
const tableName = path.basename(__filename, '.js');

module.exports = function(db, DataTypes) {
    return db.define(tableName, {
        date: {
            type: DataTypes.DATEONLY
        },
        text: DataTypes.STRING,
        rank: DataTypes.INTEGER,
        region: DataTypes.STRING,
        ip: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                this.belongsTo(models.Word);
            },
            getCommentsFromDate: function(date) {
                console.log(date);
                this.findAll({
                    where: { date }
                });
            }
        }
    }, {
        instanceMethods: {
            placeVote: function() {
            }
        }
    });
};
