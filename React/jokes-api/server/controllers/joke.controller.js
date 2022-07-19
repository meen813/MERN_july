//controller needs to be able to access the model ... so import the models
const Joke = require("../models/Joke.model");



module.exports.showAllJokes = (req, res) =>{
    Joke.find()
        .then((foundJokes)=>{
            res.json({results: foundJokes})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })

}

module.exports.createJoke = (req, res)=>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })
}

module.exports.findOneJoke = (req, res)=>{
    Joke.findOne({_id:req.params.id})
        .then((foundJoke)=>{
            res.json({results: foundJoke})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })
}

module.exports.updateJoke = (req,res)=>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body, 
        {new:true, runValidators: true}
        )  
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })
}



module.exports.deleteJoke = (req,res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(deletedJoke =>{
            res.json({results: deletedJoke})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })
}


module.exports.randomJoke = (req,res)=>{
    Joke.aggregate([{$sample: {size:1}}])
        .then(randJoke=>{
            res.json({results: randJoke})
        })
        .catch(err => {
            res.json({ message: 'something went wrong', error: err })
        })
}

