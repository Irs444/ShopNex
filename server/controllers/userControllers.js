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


module.exports = userController