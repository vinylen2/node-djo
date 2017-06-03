"use strict";
const router = require('koa-router')({ prefix: "/words"});
const Words = require('../models/words.js');

router.get('/', allWords);
router.get('/:year', allWordsFromYear);
router.get('/:year/:month', allWordsFromMonth);

async function allWordsFromMonth(ctx, next) {
    const { year, month } = ctx.params;
    const wordsFromMonth = await Words.allFromMonth(year, month);

    ctx.body = {
        data: wordsFromMonth,
        message: "Here is the message"
    }
}

async function allWordsFromYear(ctx, next) {
    const wordsFromYear = await Words.allFromYear(ctx.params.year);

    ctx.body = {
        data: wordsFromYear,
        message: "Here is the message."
    }
}

async function allWords(ctx, next) {
    const words = await Words.allWords();
    ctx.body = {
        data: words,
        message: "Here is the message."
    };
}

module.exports = router;
