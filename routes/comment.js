"use strict";
const router = require('koa-router')({ prefix: "/comment"});

router.post('/:year/:month/:day', postComment);

async function postComment(ctx, next) {
    const { year, month, day } = ctx.params;
    const { text, ip, date, region } = ctx.request.body;

    singleComment.postComment(year, month, day, text, ip, region).then((result) => {
        console.log("Comment has been palced");
        ctx.body = {
            message: "Now it worked"
        };
    });
}

module.exports = router;
