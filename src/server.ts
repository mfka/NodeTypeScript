'use strict';

const express = require('express');
const compression = require('compression');
const logger = import('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const dotenv = require('dotenv');
const expressValidator = require('express-validator');

/** Load environment variables from .env file, where API keys and passwords are configured. */
dotenv.config({ path: ".env" });


let app = express();
app.set("port", process.env.PORT || 3000);
app.use(compression());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(errorHandler());

app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
module.exports = app;