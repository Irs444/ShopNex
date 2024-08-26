const categoryModel = require("../models/categoryModel");
const productModel = require("../models/productModel");

// create category
const createCategory = async (req, res) => {
    try {
        const { category } = req.body
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "please provide category name"
            })
        }
        await categoryModel.create({ category })
        res.status(200).send({
            success: true,
            message: `${category} category created successfully`
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "error in create category API",
            error
        })

    }

}

// getall category
const getallCategory = async (req, res) => {
    try {
        const category = await categoryModel.find({})
        res.status(200).send({
            success: true,
            message: 'category found successfully',
            totalCategory: category.length,
            category
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error in getall category API',
            error
        })
    }

}

// delete category
const deleteCategory = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id)
        //validation
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "category not found"
            })
        }
        // find product with this category id
        const product = await productModel.find({ category: category._id })
        // update product category
        for (let i = 0; i < product.length; i++) {
            const product = product[i]
            product.category = undefined
            await product.save()
        }
        // delete
        await category.deleteOne();
        res.status(200).send({
            success: true,
            message: "category deleted successfully"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error in getall category API',
            error
        })
    }

}

//update category
const updateCategory = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id)
        //validation
        if (!category) {
            return res.status(500).send({
                success: false,
                message: "category not found"
            })
        }
        const {updateCategory} = req.body
        // find product with this category id
        const product = await productModel.find({ category: category._id })
        // update product category
        for (let i = 0; i < product.length; i++) {
            const product = product[i]
            product.category = updateCategory
            await product.save()
        }
        if(updateCategory) category.category = updateCategory;
        // update
        await category.save();
        res.status(200).send({
            success: true,
            message: "category updated successfully"
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'error in update category API',
            error
        })
    }
}


module.exports = {
    createCategory,
    getallCategory,
    deleteCategory,
    updateCategory
}