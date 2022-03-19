const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transferSchema = new Schema({
    from: String,
    to: String,
    amount:Number
})
const Transfer = mongoose.model('Transfer', transferSchema);
module.exports = Transfer;