const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb://localhost/CUE2')
mongoose.Promise = global.Promise

app.use(bodyParser.json());
//initialize routes
app.use('/GET', require('./routes/api'));

app.listen(process.env.port || 3000, function(){

    console.log('now listening for requests');


});