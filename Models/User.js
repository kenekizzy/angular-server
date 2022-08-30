const mongoose = require('mongoose');


/* Creating a schema for the database. */
const userSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true
    }, 
    gender : {
        type : String,
        required : true
    }, 
    number : {
        type : String,
        require : true
    }
}, {
    timestamps : true
});


const Users = mongoose.model('user' , userSchema);

module.exports = {
    Users
}