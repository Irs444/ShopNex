const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

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

module.exports ={ isAuth}