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
    location: {
        type: String,
        required: true
    },
    phoneNum: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
})

module.exports = mongoose.model('BusinessUser', businessUserSchema)