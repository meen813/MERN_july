const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');


class User{
    constructor(){
        this.email = faker.internet.exampleEmail();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.number();
        this.lastName = faker.name.lastName();
        this.firstName = faker.name.firstName()
        this._id = faker.database.mongodbObjectId();
    }
}


class Company{
    constructor(){
        this._id = faker.database.mongodbObjectId();
        this.name = faker.name.findName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}


//create a route to get a random user
app.get("/api/users/new", (req, res)=>{
    //create an instance of a user using the User class
    let newUser = new User()
    // respond with json the user information
    res.json({
        results: newUser
    })
})


//create a route to get a random company
app.get("/api/companies/new", (req, res)=>{
    //create an instance of a company using the company class
    let newCompany = new Company()
    // respond with json the company information
    res.json({
        results: newCompany
    })
})


app.get("/api/user/company", (req, res)=>{
    let newUser = new User()
    let newCompany = new Company()
    res.json({
        results: newUser, newCompany
    })
} )


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
