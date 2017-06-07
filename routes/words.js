"use strict";
const router = require('koa-router')({ prefix: "/words"});
const moment = require('moment');

const { Comment, Word } = require('../models');

router.get('/', tinyWordRequest);
router.get('/week', allWordsFromWeek);

async function tinyWordRequest(ctx, next) {
    const tinyWordRequest = await Word.wordRequest(moment().format('YYYY-MM-DD'), 2);

    ctx.body = {
        data: tinyWordRequest,
        total: tinyWordRequest.length,
        message: "here is the message"
    };
}

async function allWordsFromWeek(ctx, next) {
    const wordsFromWeek = await Word.wordRequest(moment().format('YYYY-MM-DD'), 8);

    ctx.body = {
        data: wordsFromWeek,
        total: wordsFromWeek.length,
        message: "Here is the message"
    };
}

module.exports = router;
