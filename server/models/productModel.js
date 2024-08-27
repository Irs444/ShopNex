const mongoose = require("mongoose")
const {Schema} = mongoose

const productSchema = new Schema({
    name:{
        type: String,
        required:[true , "product name is required"]
    },
    description:{
        type:String,
        required:[true , "product description is required"]
    },
    price:{
        type:Number,
        required:[true , "product price is required"]
    },
    stock:{
        type:Number,
        required:[true , "stock is required"]
    },
    quantity:{
        type:Number,
        required:[true , "Quantity is required"]
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    images:[
        {
            public_id:String,
            url:String
        }
    ]

}, {timestamps:true})


module.exports = mongoose.model("product" , productSchema)