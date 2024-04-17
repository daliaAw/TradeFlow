const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const itemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    retailPrice: {
      type: Number,
      required: true,
    },
    wholesalePrice: {
      type: Number,
      required: true,
    },
    qtyAvailable: {
      type: Number,
      required: true,
    },
    minQuantity: {
      type: Number,
      required: true,
    },
    delivery: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

itemSchema.virtual('avgRating').get(function() {
  if (this.reviews.length === 0) {
    return 0;
  } else {
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / this.reviews.length;
  }
});

module.exports = mongoose.model("Item", itemSchema);