const Product = require("../models/productModel");

//@desc Getting all products
//@route GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

//@desc Getting a product
//@route GET /api/products
async function getProduct(req, res, id) {
  try {
    const product = await Product.findProduct(id);

    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ Response: "Product doesn't exist." }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

//@desc Creating a product
//@route POST /api/products
async function createProduct(req, res) {
    try {
      const product = {
        title: "Test product",
        description: "This is a test product.",
        price: 100
      }

      const newProduct = Product.create(product)

      res.writeHead(201, {"Content-Type": "application/json"})
      res.end(JSON.stringify(newProduct))

    } catch (error) {
      console.log(error);
    }
  }

module.exports = {
  getProducts, getProduct
};
