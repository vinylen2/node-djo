"use strict";
const router = require('koa-router')({ prefix: "/word"});

const db = require('../db/db');
console.log(db.Word);

router.get('/:year/:month/:day', wordFromDay);

async function wordFromDay(ctx, next) {
    const { year, month, day } = ctx.params;
    console.log(Word);
    const wordFromDay = await Word.findById(year + "-" + month + "-" + day);

    ctx.body = {
        data: wordFromDay,
        message: "Here is the message"
    }
    await next;
}

module.exports = router;
