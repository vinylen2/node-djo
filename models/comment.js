"use strict";
const Sequelize = require('sequelize');
const db = require ('../db/db.js');

const uComment = db.define('comment', {
    date: {
        type: Sequelize.DATEONLY
    },
    text: {
        type: Sequelize.STRING
    },
    rank: {
        type: Sequelize.INTEGER
    },
    region: {
        type: Sequelize.STRING
    },
    ip: {
        type: Sequelize.STRING
    }
}, {
    getterMethods: {
        findByRegion: function(region) {
            return this.findAll({
                where: {
                    region: region
                }
            })
        },
        findByIp: function(ip) {
            return this.findAll({
                where: {
                    ip: ip
                }
            })
        }
    }
});

module.exports = uComment;

// const Comments = {
//     allFromYear: function(year) {
//         return Promise.resolve(comments.filter(comment => comment.date.format("YYYY") == year));
//     },
//     allFromMonth: function(year, month) {
//         return Promise.resolve(comments.filter(comment => comment.date.format("YYYYM") == year + month));
//     },
//     allFromDay: function(year, month, day) {
//         return Promise.resolve(comments.filter(comment => comment.date.format("YYYYMD") == year + month + day));
//     },
//     numberOfCommentsFromDay: function(year, month, day) {
//         return Comments.allFromDay(year, month, day).then((result) => {
//             return result.length;
//         });
//     }
// };
