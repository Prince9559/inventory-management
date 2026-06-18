const Product = require("../models/Product");
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) 
  {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({
      createdAt: -1,
    });
    res.status(200).json(products);
  } catch (error) 
  {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(product);
  } catch (error) 
  {
    res.status(500).json({message: error.message,});
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Product Deleted Successfully",});
  } catch (error) 
  {
    res.status(500).json({
      message: error.message,
    });
  }
};

const lowStockProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const lowStock = products.filter(
      (item) => item.quantity <= item.minStock
    );
    res.status(200).json(lowStock);
  } catch (error) 
  {
    res.status(500).json({message: error.message,});
  }
};

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  lowStockProducts,
};