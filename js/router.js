"use strict";
const router = require('koa-router')({ prefix: "/api/v1"});

const words = [
    {date: "2017-06-03", word: "fotboll"},
    {date: "2017-06-04", word: "basketboll"},
    {date: "2017-06-05", word: "tennisboll"}
];

router.get('/', allWords);

async function allWords(ctx, next) {
    ctx.body = {
        data: words,
        message: "LOL"
    };
    await next;
}

module.exports = router;
