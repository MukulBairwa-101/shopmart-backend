const mongoose = require('mongoose');

const {ObjectId}= mongoose.Schema;


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:32,

    },
    description:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    productImage:{
        data:Buffer,
        contentType:String,
    },
    category:{
        type:ObjectId,
        ref:"Category"
    },


},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);