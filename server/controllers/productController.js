const productModel = require("../models/productModel");

// get all product controller

const getProductController = async(req, res) => {
  try{
    const products = await productModel.find({})
    res.status(200).send({
        success:true,
        message:"all product fetch successfully",
        products
    })

  }catch(error){
    console.log(error);
    res.status(500).send({
        success:false,
        message:"error in product getall API",
        error
    })
    
  }
}

// get single product controller

const singleProductController = async(req, res) => {
    try{
        // get product id
        const product = await productModel.findById(req.params.id)
        // validation
        if(!product){
            return res.status(404).send({
                success:false,
                message:"product not found"
            })
        }
        res.status(200).send({
            success:true,
            message:"product found",
            product
        })

    }catch(error){
        console.log(error);
        if(error.name === "CastError"){
            return  res.status(500).send({
                success:false,
                message:"Invalide id",
                error
            })
        }
        res.status(500).send({
            success:false,
            message:"error in single product API",
            error
        })
        
    }
}





module.exports = {
    getProductController,
    singleProductController
}