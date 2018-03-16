var express = require('express');
var router = express.Router();
var ctrlItems = require('../controllers/items');
var angular = require('angular');


/* Items list page */
router.get('/', ctrlItems.itemList);

module.exports = router;
