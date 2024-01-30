const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
});

const ProductModel = model("product", ProductSchema);

module.exports = ProductModel;
