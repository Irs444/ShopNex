const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    name:{
        type:String,
        required:[true , "name is required"]
    },
    email:{
        type:String,
        required:[true , "email is required"],
        unique: [true , "email already exist"]
    },
    password:{
        type:String,
        required:[true, "passwors is ewquired"],
        minLength:[6 , "password should be greater than 6"]
    }

},
 {timestamps:true}
)

module.exports = mongoose.model("user" , userSchema)