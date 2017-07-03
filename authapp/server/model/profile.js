var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the schema
var ProfileSchema = new Schema({

    fullName : {
        type : String
    },
    dob : {
        type : String
    },

    fathersName : {
        type : String
    },
    mothersName : {
        type : String
    },
//    gender : {
//        type : String
//    },
//    martialStatus : {
//        type : String
//    },
    pAddress : {
        type : String
    },
    tAddress : {
        type : String
    },
    occupation : {
        type : String
    },
    skills : {
        type : String
    },
    phoneNumber : {
        type : String
    },
    emailId : {
        type : String
    },
    experiance : {
        type : String
    },
    overView : {
        type : String
    },
});

var Profile = module.exports = mongoose.model('Profile',ProfileSchema);
//mongoose.model('User',UserSchema);
