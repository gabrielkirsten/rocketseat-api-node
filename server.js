const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect(
    'mongodb://localhost:27017/nodepi',
    { useNewUrlParser: true },
);

requireDir("./src/models");

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'https://github.com/facebook/react-native',
    })

    res.send("hello world!");
});

app.listen(3000);