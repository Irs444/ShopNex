const mongoose = require("mongoose")
const {Schema} = mongoose

// review model
const reviewSchema = new Schema({
    comment:{
        type:String,
    },
    name:{
        type:String,
        required:[true, "name is required"]
    },
    rating:{
        type:Number,
        default:0
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:[true , "user required"]
    },
},{timestamps:true})


// product model
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
    // quantity:{
    //     type:Number,
    //     required:[true , "Quantity is required"]
    // },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    images:[
        {
            public_id:String,
            url:String
        }
    ],
    review:[reviewSchema],
    rating:{
        type:Number,
        default:0
    },
    numReviews:{
        type:Number,
        default:0
    }

}, {timestamps:true})


module.exports = mongoose.model("product" , productSchema)