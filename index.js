const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');

let app = new Koa();

// Set up body parsing middleware
app.use(bodyParser());

// Require the Router defined in words.js
const words = require('./routes/words.js');

// Use the Router on the sub route /movies
app.use(words.routes());

app.listen(3000);
console.log("Listening on port 3000");
