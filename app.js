const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const router = require("router");

const routes = require('./routes/route.js');

var cors = require('cors');

const Expense = require("./models/expense");
const sequelize = require("./util/database");

const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync()
    .then((result) => {
        app.listen(3000);
    }).catch((err) => {
        console.log(err);
    });
