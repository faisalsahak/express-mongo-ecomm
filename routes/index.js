const express = require('express');
const router = express.Router();
const Products = require('../models/product');
const csrf = require('csurf');

const csrfProtection = csrf();
router.use(csrfProtection)

/* GET home page. */
router.get('/', function(req, res) {
  const products = Products.find(function(err, docs){
    res.render('Home', { title: 'Home', products: docs });
  });

});

router.get('/signup', function(req, res){
  res.render('user/signup', {csrfToken: req.csrfToken()})
});

router.get('/login', function(req, res){
  res.render('user/signin', {csrfToken: req.csrfToken()})
});

router.post('/signup', function(req, res, next){
  console.log({email: req.body.email, password: req.body.password})
})

module.exports = router;
