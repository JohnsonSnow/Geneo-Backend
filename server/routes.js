require('dotenv').config();
const express = require('express');
const products = require('./products.json');
const blogPosts = require('./blogPosts.json');
// import blogPosts from "./blogPosts";

module.exports = function getRoutes() {
  const router = express.Router();

  // router.get('/products', getProducts);
  // router.get('/products/:postId', getProduct);

  router.get('/blog', getBlogPosts);
  router.get('/blog/post/:postId', getBlog);

  return router;
};

// function getProducts(req, res) {
//   res.status(200).json({ products });
// }

function getBlogPosts(req, res) {
  res.status(200).json({blogPosts})
}

function getBlog(req, res) {
  const { postId } = req.params;
  const blog = blogPosts.find(post => post.id.toString() === postId);
  try {
    if (!blog) {
      throw Error(`No post found for id: ${postId}`);
    }
    res.status(200).json({ blog });
  } catch (error) {
    res.status(404).json({ statusCode: 404, message: error.message });
  }
}

// function getProduct(req, res) {
//   const { postId } = req.params;
//   const product = products.find(product => product.id === postId);
//   try {
//     if (!product) {
//       throw Error(`No product found for id: ${postId}`);
//     }
//     res.status(200).json({ product });
//   } catch (error) {
//     res.status(404).json({ statusCode: 404, message: error.message });
//   }
// }
