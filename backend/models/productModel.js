import mongoose from "mongoose";


const priceSchema = new mongoose.Schema({
  amountMax: { type: Number, default: 0.0, required: true },
  amountMin: { type: Number, default: 0.0, required: true },
  availability: { type: String, default: 'Out of Stock'},
  isSale: { type: Boolean, required: true, default: false },

})
const reviewSchema = new mongoose.Schema(
  {
    reviewName: { type: String, required: "" },
    reviewRating: { type: Number, default: 0 },
    reviewComment: { type: String, required: "" },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema({
  id: { type: String, required: true },
  price: priceSchema,
  brand: { type: String, required: true },
  categories: { type: String, required: true },
  imageURLs: { type: String, required: true },
  manufacturer: { type: String },
  name: { type: String, required: true },
  primaryCategories: { type: String, required: true },
  upc: { type: Number, required: true },
  weight: { type: String },
  review: [reviewSchema],
});

const Product = mongoose.model('Product', productSchema);

export default Product;

