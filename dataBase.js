const mongoose = require("mongoose");

const databaseURI = "mongodb+srv://gofood:food12345@cluster0.2sexopl.mongodb.net/ekoom?retryWrites=true&w=majority"
const ekoomDB = async () => {
    await mongoose.connect(databaseURI, { useNewUrlParser: true,})
        
        .then(async() => {
            console.log("ekoom Connected to mongodb");
        }).catch(() => {
            console.log("some thing went wrong");
        })
}

module.exports = ekoomDB;