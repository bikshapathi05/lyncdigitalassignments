var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var UserSchema = new Schema({

       firstName : {
        type : String
    },
    lastName : {
        type : String
    },

    emailId : {
        type : String,
        unique : true,
        index : true
    },
    password : {
        type : String
    },
    mobileNumber : {
        type : Number
    },
});

var Person = module.exports = mongoose.model('Person',UserSchema);
//mongoose.model('User',UserSchema);
