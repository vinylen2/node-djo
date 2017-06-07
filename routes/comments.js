"use strict";
const router = require('koa-router')({ prefix: "/comments"});
const { Word, Comment } = require('../models');
const moment = require('moment');


router.get('/', allCommentsFromDay);

async function allCommentsFromDay(ctx, next) {
    console.log(Comment.associate);
    // console.log(Comment);
    // const allComments = await Comment.getCommentsFromDate(moment().format('YYYY-MM-DD'));

    ctx.body = {
        // data: allComments,
        message: "here is the message"
    };
}

module.exports = router;
