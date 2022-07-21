const Product = require("../models/product.model");


module.exports.findAllProducts = (req, res)=>{
    Product.find()
        .then(allProducts=>{
            res.json({results: allProducts})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.createNewProducts = (req, res)=>{
    Product.create(req.body)
        .then(newlyCreatedProduct=>{
            res.json({results: newlyCreatedProduct})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.findOneProduct = (req, res)=>{
    Product.findOne({_id: req.params.id})
        .then(product=>{
            res.json({results: product})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.updateOneProduct = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updateProduct=>{
            res.json({results: updateProduct})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.deleteProduct = (req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(product=>{
            res.json({results: product})
        })
        .catch(err=>{
            res.json(err)
        })
}