const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    retailPrice: {
        type: Number,
        required: true
    },
    wholesalePrice: {
        type: Number,
        required: true
    },
    qtyAvailable: {
        type: Number,
        required: true
    },
    minQuantity: {
        type: Number,
        required: true
    },
    delivery: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
},{
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)