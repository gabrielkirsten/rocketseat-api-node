const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/nodepi',
    { useNewUrlParser: true },
);

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.listen(3000);