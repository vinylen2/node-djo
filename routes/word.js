"use strict";
const router = require('koa-router')({ prefix: "/word"});
const Words = require('../models/words.js');

router.get('/:year/:month/:day', allWordsFromDay);

async function allWordsFromDay(ctx, next) {
    const { year, month, day } = ctx.params;
    const wordFromDay = await Words.allFromDay(year, month, day);

    ctx.body = {
        data: wordFromDay,
        message: "Here is the message"
    }
    await next;
}

module.exports = router;
