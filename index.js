const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

//Set up body parsing middleware
app.use(bodyParser());

//Require the Router we defined in movies.js
const words = require('./js/routers.js');

//Use the Router on the sub route /movies
app.use(words.routes());

app.listen(3000);
console.log("Listening on port 3000");
