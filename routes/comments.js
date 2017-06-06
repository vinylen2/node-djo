"use strict";
const router = require('koa-router')({ prefix: "/comments"});
const Comments = require('../models/comment.js');

const uComment = require('../db/db.js').uComment;

// router.get('/', allComments);
router.get('/:year', allComments);
router.get('/:year/:month', allCommentsFromMonth);
router.get('/total/:year/:month/:day', numberOfCommentsFromDay);
router.get('/:year/:month/:day', allCommentsFromDay);

async function allComments(ctx, next) {
    const year = ctx.params.year;
    const allComments = await Comments.allFromYear(year);

    ctx.body = {
        data: allComments,
        message: "here is the message"
    };
}

async function allCommentsFromMonth(ctx, next) {
    const {year, month } = ctx.params;
    const commentsFromMonth = await Comments.allFromMonth(year, month);

    ctx.body = {
        data: commentsFromMonth,
        message: "here is the message"
    };
}

async function numberOfCommentsFromDay(ctx, next) {
    const { year, month, day } = ctx.params;
    const numberOfComments = await Comments.numberOfCommentsFromDay(year, month, day);

    ctx.body = {
        data: { total: numberOfComments },
        message: "Here is the message"
    };
}

async function allCommentsFromDay(ctx, next) {
    const { year, month, day } = ctx.params;
    const commentsFromDay = await Comments.allFromDay(year, month, day);

    ctx.body = {
        data: commentsFromDay,
        total: commentsFromDay.length,
        message: "Here is the message"
    };
}


module.exports = router;
