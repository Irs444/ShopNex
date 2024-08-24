const userModel = require("../models/userModel")

const userController = async(req, res) => {
    try{
        const {name, email, password} = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(500).secd({
                message: "please provide all fields",
                success: false
            })
        }

        //check existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(500).send({
                message:"email already exist",
                success: false
            })
        }
        const user = await userModel.create({
            name, email, password
        });
        res.status(200).send({
            message:"register successfully , please login",
            success:true,
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            message:"error in register API",
            success: false,
            error
        })
        
    }

}

//login

const loginController = async(req , res) => {
    try{
        const {email ,password} = req.body;
        if(!email || !password){
           return res.status(500).send({
                success:false,
                message:"Provide all the fields"
            })
        }
        //check user
        const user = await userModel.findOne({email})

        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:"user not found"
            })
        }

        //check password
        const isMatch = await user.comparePassword(password)
        //validation
        if(!isMatch){
            return res.status(500).send({
                success: false,
                message:"invalid credentials",
            })
        }
        res.status(200).send({
            success:true,
            message:"Login successfully",
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            message:"error in login API",
            success:false,
            error
        })
        
    }
}


module.exports = userController 
module.exports = loginController