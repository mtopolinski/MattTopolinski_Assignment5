var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST
var request = require('request');

/* GET Add page. */
router.get('/', function(req, res, next) {
    res.render('addItem', { title: 'addItem'});
});

/* Handle POST from page form. */
router.post('/', function(req, res, next) {

    console.log('addItem post from form');
    console.log(req.body.name);
    console.log(req.body.description);



    const path = 'http://localhost:3000/items';
    var postdata = {

        name: req.body.name,
        description: req.body.description,
        startingPrice: req.body.startingPrice,
        bids: {username: req.body.username,
        price: req.body.price}

    };
    const requestOptions = {
        url : path,
        method : 'POST',
        json : postdata


    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('addItem', { title: 'addItem', Items: body});
        })
    );
});

module.exports = router;