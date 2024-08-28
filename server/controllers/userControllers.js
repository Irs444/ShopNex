const userModel = require("../models/userModel");
const getDataUri = require("../utils/features");
const cloudinary = require("cloudinary")

const userController = async (req, res) => {
    try {
        const { name, email, password, answer } = req.body;
        //validation
        if (!name || !email || !password || !answer) {
            return res.status(500).secd({
                message: "please provide all fields",
                success: false
            })
        }

        //check existing user
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(500).send({
                message: "email already exist",
                success: false
            })
        }
        const user = await userModel.create({
            name, email, password, answer
        });
        res.status(200).send({
            message: "register successfully , please login",
            success: true,
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "error in register API",
            success: false,
            error
        })

    }

}

//login

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).send({
                success: false,
                message: "Provide all the fields"
            })
        }
        //check user
        const user = await userModel.findOne({ email })

        //validation
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "user not found"
            })
        }

        //check password
        const isMatch = await user.comparePassword(password)
        //validation
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "invalid credentials",
            })
        }
        //Token 
        const token = user.generateToken();          //for getting token
        res.status(200).cookie("token", token).send({
            success: true,
            message: "Login successfully",
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "error in login API",
            success: false,
            error
        })

    }
}

// get user profile

const userProfileController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id);
        user.password = undefined
        res.status(200).send({
            success: true,
            message: "User Profile",
            user,

        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in user profile API",
            error,
        })
    }

}

//logout

const logoutController = async (req, res) => {
    try {
        res.status(200).cookie("token", " ", {
            expires: new Date(Date.now()),
            secure: process.env.NODE_ENV == "development" ? true : false,
            httpOnly: process.env.NODE_ENV == "development" ? true : false,
            sameSite: process.env.NODE_ENV == "development" ? true : false,
        }).send({
            success: true,
            message: "Logout successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in logout API",
            error,
        })

    }
}

//update user profile

const updateProfileController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)   // to find user
        const { name, email, password } = req.body
        // validation + update
        if (name) user.name = name
        if (email) user.email = email
        if (password) user.password = password
        // save user
        await user.save()
        res.status(200).send({
            success: true,
            message: "user update successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update-profile API",
            error,
        })

    }

}

// update password

const updatePasswordController = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)   // to find user
        const { oldPassword, newPassword } = req.body
        //validation
        if (!oldPassword || !newPassword) {
            return res.status(500).send({
                success: false,
                message: "please provide old and new password"
            })
        }
        //old password check
        const isMatch = await user.comparePassword(oldPassword)
        //validation
        if (!isMatch) {
            return res.status(500).send({
                success: false,
                message: "Invalide old password"
            })
        }
        user.password = newPassword
        await user.save()
        res.status(200).send({
            success: true,
            message: "update password successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update-password API",
            error,
        })

    }

}

// update profile picture

const updateProfilePic = async (req, res) => {
    try {
        const user = await userModel.findById(req.user._id)  // to find user
        // get file from client
        const file = getDataUri(req.file)
        // delete previous image
        await cloudinary.v2.uploader.destroy(user.profile.public_id)
        // update image
        const cb = await cloudinary.v2.uploader.upload(file.content)
        // to store
        user.profile = {
            public_id: cb.public_id,
            url: cb.secure_url
        }
        // save function
        await user.save()
        res.status(200).send({
            success: true,
            message: " profile picture updated"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in update-picture API",
            error,
        })

    }


}

// forget password
const forgetPassword = async (req, res) => {
    try {
        //user get email || password || answer
        const { email, newPassword, answer } = req.body
        // validation
        if (!email || !newPassword || !answer) {
            return res.status(500).send({
                success: false,
                message: "All fields are required"
            })
        }
        // find user
        const user = await userModel.findOne({ email, answer })
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "invalid user and answer"
            })
        }
        user.password = newPassword
        await user.save();
        res.status(200).send({
            success: true,
            message: "your password is reset please Login!!"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: true,
            message: "error in forget password API",
            error
        })

    }

}



module.exports = {
    userController,
    loginController,
    userProfileController,
    logoutController,
    updateProfileController,
    updatePasswordController,
    updateProfilePic,
    forgetPassword
}


