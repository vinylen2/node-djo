const router = require('koa-router')({ prefix: '/word' });

const { Word } = require('../models');
const moment = require('moment');

router.get('/', wordFromDay);

async function wordFromDay(ctx, next) {
    const word = await Word.findById(moment().format('YYYY-MM-DD'));

    ctx.body = {
        data: word,
        message: 'Here is the message',
    }
    await next;
}

module.exports = router;
