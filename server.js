const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

mongoose.connect(
    'mongodb://localhost:27017/nodepi',
    { useNewUrlParser: true },
);

requireDir("./src/models");

const Product = mongoose.model('Product');

app.use('/api', require("./src/routes"));

app.listen(3000);