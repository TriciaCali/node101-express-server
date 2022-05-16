// import files and packages up here
const topSpotsData = require('../server/data.json');
//const jsonData = require('./data.json');
const express= require('express');
const morgan = require('morgan');
const { expect } = require('chai');

// create your express server below
var app = express();

// add your routes and middleware below
const router = express.Router();
app.use(morgan('dev'));

app.use('/',router);

router
 .route('/')
 .all(function(req,res,next){
    res.status(200).send('New Express server');
 })

 router
    .route('/data')
    .get(function(req,res,next){
        res.json(topSpotsData)
    })

// finally export the express application
module.exports = app;
