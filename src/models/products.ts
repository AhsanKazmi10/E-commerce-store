import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    default: "General"
  },
  price: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ""
  },
  stock: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// ✅ Ye important hai - prevent model recompilation
export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);