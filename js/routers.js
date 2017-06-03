"use strict";
const router = require('koa-router')();

const words = [
    {date: "2017-06-03", word: "fotboll"},
    {date: "2017-06-04", word: "basketboll"},
    {date: "2017-06-05", word: "tennisboll"}
];

router.get('/', allWords);

function *allWords(next) {
    console.log("Nu kördes nåt");
    this.body = words;
    yield next;
}

module.exports = router;
