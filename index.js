const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');

let app = new Koa();

// Set up body parsing middleware
app.use(bodyParser());

// Require the Router defined in words.js
const words = require('./routes/words.js');
const word = require('./routes/word.js');

// Use the Router on the sub route /words.js
app.use(words.routes());
app.use(word.routes());

app.listen(3000);
console.log("Listening on port 3000");
