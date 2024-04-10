const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = require('./order');

const orderHistorySchema = new Schema({
    orders: [orderSchema],
})

module.exports = mongoose.model('OrderHistory', orderHistorySchema);