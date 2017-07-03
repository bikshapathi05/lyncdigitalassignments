var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var User = require("./server/route/users");
var Profile = require("./server/route/profiles");
mongoose.connect("mongodb://localhost/DigitalLync");
var db = mongoose.connection;

var app = express();
app.use(express.static(__dirname+"/public"));
app.use(cors()); 

app.use(bodyParser.json());

app.post('/api/register', User.registerUser);
app.post('/api/login', User.loginUser);

app.post('/api/profile', Profile.registerProfile);

app.listen(3019, function(){
    console.log("Server started on 3019");
});