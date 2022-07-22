const Author = require("../models/author.model");


module.exports.findAllAuthors = (req, res)=>{
    Author.find()
        .then(allAuthors=>{
            res.json({results: allAuthors})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.createNewAuthors = (req, res)=>{
    Author.create(req.body)
        .then(newlyCreatedAuthors=>{
            res.json({results: newlyCreatedAuthors})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.findOneAuthor = (req, res)=>{
    Author.findOne({_id: req.params.id})
        .then(author=>{
            res.json({results: author})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.updateOneAuthor = (req, res)=>{
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
        .then(updateAuthor=>{
            res.json({results: updateAuthor})
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.deleteAuthor = (req, res)=>{
    Author.deleteOne({_id: req.params.id})
        .then(author=>{
            res.json({results: author})
        })
        .catch(err=>{
            res.json(err)
        })
}