const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const Sequelize = require('sequelize');

const models = require('./models');

let app = new Koa();

// Set up body parsing middleware
app.use(bodyParser());

// Enable CORS
app.use(cors());

// Require the Router defined in words.js
const words = require('./routes/words.js');
const word = require('./routes/word.js');
const comments = require('./routes/comments.js');
const comment = require('./routes/comment.js');


app.listen(3000);
console.log("Server listening on port 3000");

// how to do this? http://koajs.com/#context
// app.context.db = db();

models.connection.sync().then(() => {
    console.log('Sequelize synchronized');

    // Use the Router on the sub route /words.js
    app.use(words.routes());
    app.use(word.routes());
    app.use(comments.routes());
    app.use(comment.routes());
});
