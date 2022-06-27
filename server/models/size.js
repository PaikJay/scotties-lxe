const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const sizeSchema = new Schema({
    product_type: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    size_type: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    }

})
//module.exports = Mongoose.model('User', userSchema)
const sizeModel = Mongoose.model('Size', sizeSchema)
module.exports = sizeModel