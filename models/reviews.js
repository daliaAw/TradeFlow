const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
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

module.exports = mongoose.model('Review', reviewSchema)