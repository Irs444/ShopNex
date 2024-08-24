const mongoose = require("mongoose")
const bcrypt  = require("bcryptjs")
const JWT = require("jsonwebtoken")

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

//hash function
userSchema.pre("save", async function(params) {
  this.password = await bcrypt.hash(this.password, 10)    
})

//compare function

userSchema.methods.comparePassword = async function(plainpass) {
    return await bcrypt.compare(plainpass , this.password)
    
}

//JWT Token
userSchema.methods.generateToken = function(){
    return JWT.sign({id: this._id}  , process.env.JWT_SECRET , {
        expiresIn: "7d"
    })
}


module.exports = mongoose.model("user" , userSchema)