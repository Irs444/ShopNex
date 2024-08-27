const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// User Auth
const isAuth = async (req, res, next) => {
    const  {token}  = req.cookies;
    // console.log("Extracted Token:", token);
    //validation
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unautherised user",
        });
    } else {

        try {
            const decodeData = jwt.verify(token, process.env.JWT_SECRET);
            // console.log("Decoded Data:", decodeData);
            req.user = await userModel.findById(decodeData._id);
            next();
        } catch (error) {
            console.log("token verified failed", error);
            res.status(401).send("invalid token");

        }
    }


};


//admin auth
const isAdmin = async(req, res, next) => {
    if(req.user.role !== "admin"){
        return res.status(404).send({
            success:false,
            message:"Admin Only"
        })
    }
    next();
}

module.exports = {isAuth, isAdmin}