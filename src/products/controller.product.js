const Product = require("./product.model");

const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, image } = req.body;
    const newProduct = await Product.create({ name, quantity, price, image });
    res.status(201).json({ newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createProduct,
};
