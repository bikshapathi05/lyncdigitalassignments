var Profile = require("../model/profile");


exports.registerProfile = function (req, res) {
//    console.log(req.body);
    var fullName = req.body.fullName;
    var dob = req.body.dob;
    var fathersName = req.body.fathersName;
    var mothersName = req.body.mothersName;
//    var gender = req.body.gender;
//    var martialStatus = req.body.martialStatus;
    var pAddress = req.body.pAddress;
    var tAddress = req.body.tAddress;
    var occupation = req.body.occupation;
    var skills = req.body.skills;
    var phoneNumber = req.body.phoneNumber;
    var emailId = req.body.emailId;
    var experiance = req.body.experiance;
    var overView = req.body.overView;
    var newProfile = new Profile({
        fullName: fullName,
        dob: dob,
        fathersName: fathersName,
        mothersName: mothersName,
//        gender: gender,
//        martialStatus: martialStatus,
        pAddress: pAddress,
        tAddress: tAddress,
        occupation: occupation,
        skills: skills,
        phoneNumber: phoneNumber,
        emailId: emailId,
        experiance: experiance,
        overView: overView
    });
    Profile.findOne({ emailId: emailId }, function (err, event) {
        console.log(event);
        if (err) {
            res.send({status : false, message:"Error occured while finding if email exists", err});
            console.error(err);
        }
        else {
            if (event == null) {
                newProfile.save(function (err1, result) {
                    if (err1) {
                        res.send({ status: false, message: "Email is invalid", err1 });
                        console.error(err1);
                    } else {
                        res.send({ status: true, message: "Registration successful", result });
                        console.log(result);
                    }
                });
            } else {
                res.send({ status: false, message: "Email already exists:", event });
                console.log("email already exists:" + event);
            }
        }
    });

}
