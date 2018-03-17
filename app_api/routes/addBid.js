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
router.put('/', function(req, res, next) {

    console.log('addBid post from form');
    console.log(req.body.name);
    console.log(req.body.description);



    const path = 'http://localhost:3000/items/:itemId';
    var postdata = {

        bids: {username: req.body.username,
            price: req.body.price}

    };
    const requestOptions = {
        url : path,
        method : 'PUT',
        json : postdata


    };

    request(
        requestOptions,
        (function (err, response, body) {

            console.log(body);

            res.render('addBid', { title: 'addBid', Items: body});
        })
    );
});

module.exports = router;