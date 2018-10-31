'use strict';

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config({ path: '.env' });

const app = express();

mongoose.connect(`mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true
}).then(function(response) {
    console.log('Successfully connected to MongoDB');
}).catch(function(error) {
    console.log('Error connecting to MongoDB: ', error.message);
    process.exit();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.status(200).send('Hello!');
});

app.set('port', process.env.EXPRESS_PORT || 3000);
const server = module.exports = app.listen(app.get('port'), function() {
    console.log(`Node app running on ${server.address().address}:${server.address().port}`);
});