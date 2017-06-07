"use strict";
const router = require('koa-router')({ prefix: "/comment"});
const { Comment, Word } = require('../models');

router.post('/', postComment);

async function postComment(ctx, next) {
    const { text, ip, date, region } = ctx.request.body;
}

module.exports = router;
