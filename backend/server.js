const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Inventory Management API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});