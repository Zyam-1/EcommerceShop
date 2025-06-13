var express = require('express');
var router = express.Router();
var products = require('../data/products');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(products);
});

//get a specfic product by id
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let product = products.find(p=> p._id === Number(id));
  res.json(product);
});

module.exports = router;
