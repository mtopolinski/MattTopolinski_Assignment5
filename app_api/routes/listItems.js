var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

var mongoose = require('mongoose');



/* GET list. */
router.get('/', function(req, res, next) {



    const path = 'http://localhost:3000/items/5a989b1a8490a7e67240873c';

    const requestOptions = {
        url : path,
        method : 'GET',
        json : {}
    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('listItems', { name: 'List', Items: body});
        })
    );


});




module.exports = router;