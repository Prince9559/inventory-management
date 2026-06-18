const express = require("express");

const router = express.Router();

const {addProduct,getProducts,updateProduct,deleteProduct,lowStockProducts,} = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/low-stock", lowStockProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;