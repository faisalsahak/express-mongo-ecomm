var express = require('express');
var router = express.Router();
const Products = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  const products = Products.find(function(err, docs){
    res.render('Home', { title: 'Home', products: docs });
  });

});

module.exports = router;
