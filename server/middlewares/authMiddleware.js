const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");

const isAuth = async (req, res, next) => {
    const { token } = req.cookies;
    //validation
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unautherised user"
        })
    }

    try {
        const decodeData = JWT.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decodeData.id);
        next();
    } catch (error) {
        console.log("token verified failed", error);
        res.status(401).send("invalid token")

    }

}

module.exports = isAuth