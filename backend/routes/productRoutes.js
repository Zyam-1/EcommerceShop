var express = require('express');
var router = express.Router();
var { getProducts, getProdById } = require("../controllers/productController");

/* GET home page. */
router.get('/', getProducts);

// find a product by id
router.get("/:_id", getProdById);


module.exports = router;
