const JokeController = require("../controllers/Joke.controller")


module.exports = (app)=>{
    app.get("/api/jokes",JokeController.showAllJokes)
    app.get("/api/jokes/random",JokeController.randomJoke)
    app.get("/api/jokes/:id", JokeController.findOneJoke)
    // app.get("/api/jokes/random",JokeController.randomJoke)
    app.post("/api/jokes/new", JokeController.createJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.updateJoke)

}