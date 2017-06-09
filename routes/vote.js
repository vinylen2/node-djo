"use strict";
const router = require('koa-router')({ prefix: "/vote"});

router.patch('/:year/:month/:day', voteComment);

async function voteComment(ctx, next) {
    const { year, month, day } = ctx.params;
    const { commentId, vote } = ctx.request.body;

    Vote.place(year, month, day, commentId, vote).then((result) => {
        console.log("Voting has been come");

        ctx.body = {
            message: "The vote has been placed"
        };
    })
}

module.exports = router;
