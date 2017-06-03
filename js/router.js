"use strict";
const router = require('koa-router')({ prefix: "/api/v1"});

const words = [
    {date: "2017-06-03", word: "fotboll"},
    {date: "2015-05-04", word: "basketboll"},
    {date: "2017-06-05", word: "tennisboll"}
];

router.get('/', apiMessage);
router.get('/words', allWords);
router.get('/words/:year', allWordsFromYear);
router.get('/words/:year/:month', allWordsFromMonth);
router.get('/word/:year/:month/:day', allWordsFromDay);

function apiMessage(ctx) {
    ctx.body = "This is the api message";
}

async function allWordsFromDay(ctx, next) {
    let arrayOfWords = wordsFromDay(ctx.params.year, ctx.params.month, ctx.params.day);

    ctx.body = {
        data: arrayOfWords,
        message: "Here is the message"
    }
    await next;
}

async function allWordsFromMonth(ctx, next) {
    let arrayOfWords = wordsFromMonth(ctx.params.year, ctx.params.month);

    ctx.body = {
        data: arrayOfWords,
        message: "Here is the message"
    }
    await next;
}

async function allWordsFromYear(ctx, next) {
    let arrayOfWords = wordsFromYear(ctx.params.year);

    ctx.body = {
        data: arrayOfWords,
        message: "Here is the message."
    }
    await next;
}

async function allWords(ctx, next) {
    ctx.body = {
        data: words,
        message: "Here is the message."
    };
    await next;
}

function arrayFromProp(prop, value) {
    return function(element) {
        let dateObject = dateExtractor(element);
        return dateObject[prop] == value;
    }
}

function wordsFromYear(year) {
    return words.filter(arrayFromProp("year", year))
}

function wordsFromMonth(year, month) {
    let array = wordsFromYear(year);
    return array.filter(arrayFromProp("month", zero_pad(month)))
}

function wordsFromDay(year, month, day) {
    let array = wordsFromMonth(year, month);
    return array.filter(arrayFromProp("day", zero_pad(day)))

}

function dateExtractor(dateString) {
    let dateArray = dateString.date.split("-");
    let dateObject = {
        year: dateArray[0],
        month: dateArray[1],
        day: dateArray[2]
    };
    return dateObject;
}

function zero_pad(number) {
    if (number < 10) {number = "0" + number;}
    return number;
}

module.exports = router;
