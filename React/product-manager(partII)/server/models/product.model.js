const mongoose = require('mongoose');

//title, price, description

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [2, "Name must be at least 2 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price must be at least 0"]
    },
    description:{
        type: String,
        required: [true, "Description is required"],
        min: [5, "Description must be at least 5 characters"]
    }    
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;