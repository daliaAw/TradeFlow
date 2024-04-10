const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessUserSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },
    businessName: {
        type: String,
        required: true
    },
    businessAddress: {
        type: String,
        required: true
    },
    businessPhone: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
})

module.exports = mongoose.model('BusinessUser', businessUserSchema)