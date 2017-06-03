"use strict";

const words = [
    {date: new Date("2017-06-03"), word: "fotboll"},
    {date: new Date("2015-05-04"), word: "basketboll"},
    {date: new Date("2017-06-05"), word: "tennisboll"}
];

function zero_pad(number) {
    if (number < 10) {number = "0" + number;}
    return number;
}

const Words = {
    allWords: function() {
        return words
    },
    allFromYear: function(year) {
        return Promise.resolve(words.filter(word => word.date.getFullYear() == year));
    },
    allFromMonth: function(year, month) {
        return Words.allFromYear(year).then((result) => {
            return result.filter(word => (word.date.getMonth() + 1) == month);
        });
    },
    allFromDay: function(year, month, day) {
        return Words.allFromMonth(year, month).then((result) => {
            return result.filter(word => word.date.getDate() == day);
        });
    }

};

module.exports = Words;
