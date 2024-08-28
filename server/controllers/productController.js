const productModel = require("../models/productModel");
const getDataUri = require("../utils/features");
const cloudinary = require("cloudinary")

// get all product controller

const getProductController = async (req, res) => {
    try {
        const products = await productModel.find({})
        res.status(200).send({
            success: true,
            message: "all product fetch successfully",
            totalProduct:products.length,
            products
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in product getall API",
            error
        })

    }
}

// get single product controller

const singleProductController = async (req, res) => {
    try {
        // get product id
        const product = await productModel.findById(req.params.id)
        // validation
        if (!product) {
            return res.status(404).send({
                success: false,
                message: "product not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "product found",
            product
        })

    } catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "Invalide id",
                error
            })
        }
        res.status(500).send({
            success: false,
            message: "error in single product API",
            error
        })

    }
}

// create product

const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body
        //validation
        // if(!name || !description || !price || !category || !stock){
        //     return res.status(500).send({
        //         success:false,
        //         message:"please provide all fields"
        //     })
        // }
        if (!req.file) {
            return res.status(500).send({
                success: false,
                message: "please provide product image"
            })
        }
        const file = getDataUri(req.file)
        const cb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cb.public_id,
            url: cb.secure_url
        }
        await productModel.create({
            name, description, price, category, stock, images: [image]
        })
        res.status(200).send({
            success: true,
            message: "product created successfully"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in create product API",
            error
        })

    }

}

// update  product controller

const updateProductController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        //validation
        if (!product) {
            return res.status(500).send({
                success: false,
                message: "product not found"
            })
        }
        const { name, description, price, stock, category } = req.body
        // validation
        if (name) product.name = name
        if (description) product.description = description
        if (price) product.price = price
        if (stock) product.stock = stock
        if (category) product.category = category

        await product.save()
        res.status(200).send({
            success: true,
            message: "product updated successfully"
        })

    } catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "invalide id"
            })
        }
        res.status(500).send({
            success: false,
            message: "error in update product API",
            error
        })
    }

}

// update product image

const updateProductImage = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        //validation
        if (!product) {
            return res.status(500).send({
                success: false,
                message: "product not found"
            })
        }
        // check file
        if (!req.file) {
            return res.status(500).send({
                success: false,
                message: "product image not found"
            })
        }

        const file = getDataUri(req.file)
        const cb = await cloudinary.v2.uploader.upload(file.content)
        const image = {
            public_id: cb.public_id,
            url: cb.secure_url
        }
        //save
        product.images.push(image)
        await product.save();
        res.status(200).send({
            success: true,
            message: "image update successfully"
        })
    } catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "invalide id"
            })
        }
        res.status(500).send({
            success: false,
            message: "error in update product image API",
            error
        })
    }

}

//delete product image

const deleteProductImage = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        //validation
        if (!product) {
            return res.status(500).send({
                success: false,
                message: "product not found"
            })
        }
        // image id find
        const id = req.query.id;
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "product image not found"
            })
        }

        let isExist = -1
        product.images.forEach((item, index) => {
            if (item._id.toString() === id.toString()) isExist = index
        })
        if (isExist < 0) {
            return res.status(404).send({
                success: false,
                message: "image not found"
            })
        }
        // delete product image
        await cloudinary.v2.uploader.destroy(product.images[isExist].public_id)
        product.images.splice(isExist, 1)
        await product.save()
        res.status(200).send({
            success: true,
            message: "image deleted successfully"
        })


    } catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "invalide id"
            })
        }
        res.status(500).send({
            success: false,
            message: "error in delete image API",
            error
        })

    }

}

// delete product

const deleteProductController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
        if (!product) {
            return res.status(500).send({
                success: false,
                message: 'product not found'
            })
        }
        // delete image from cloudinary
        for (let index = 0; index < product.images.length; index++) {
            await cloudinary.v2.uploader.destroy(product.images[index].public_id)
        }
        await product.deleteOne()
        res.status(200).send({
            success: true,
            message: "product deleted successfully"
        })


    } catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "invalide id"
            })
        }
        res.status(500).send({
            success: false,
            message: "error in delete product API",
            error
        })

    }
}

// create product review and comment

const productReview = async(req, res) => {
    try{
        const {comment , rating} = req.body
        //find product
        const product = await productModel.findById(req.params.id)
        // check pprevious review
        const reviewExist = product.review.find((r) => r.user.toString() === req.user._id.toString())
        if(reviewExist){
            return res.status(400).send({
                success:false,
                message: "product already reviewed"
            })
        }
        // review object
        const reviews = {
            name: req.user.name,
            rating:Number(rating),
            comment,
            user: req.user._id
        }
        // passing review object
        product.review.push(reviews)
        product.numReviews = product.review.length
        product.rating = product.review.reduce((acc , item) => item.rating + acc , 0) / product.review.length
        //save
        await product.save();
        res.status(200).send({
            success:true,
            message: "review added!!"
        })

    }catch (error) {
        console.log(error);
        if (error.name === "CastError") {
            return res.status(500).send({
                success: false,
                message: "invalide id"
            })
        }
        res.status(500).send({
            success: false,
            message: "error in review API",
            error
        })

    }

}





module.exports = {
    getProductController,
    singleProductController,
    createProductController,
    updateProductController,
    updateProductImage,
    deleteProductImage,
    deleteProductController,
    productReview
}