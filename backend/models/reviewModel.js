import mongoose from "mongoose";


const reviewSchema = new mongoose.Schema(
    {
      reviewName: { type: String, required: false },
      reviewRating: { type: Number },
      reviewComment: { type: String, required: false },
    },
    {
      timestamps: true,
    }
  );

const Review = mongoose.model('Review', reviewSchema);


export default Review;