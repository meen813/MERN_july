const AuthorController = require("../controllers/author.contoller");

//get, post, put, delete
module.exports = (app) =>{
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors", AuthorController.createNewAuthors);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.put("/api/authors/:id", AuthorController.updateOneAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteAuthor);
}