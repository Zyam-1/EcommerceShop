var products = require("../data/products");


const getProducts = (req, res) => {
    res.json(products);
}


const getProdById = (req, res) => {
    let _id = req.params._id;
    let product = products.find(p => p._id == _id);
    res.json(product);
}



module.exports = { getProducts, getProdById };