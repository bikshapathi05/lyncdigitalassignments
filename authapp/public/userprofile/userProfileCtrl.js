app.controller("userProfileCtrl", ['$scope', '$http', '$location', '$rootScope', function ($scope, $http, $location, $rootScope) {
    //login status condition
    $rootScope.registerStatus = true;
    $rootScope.loginStatus = true;
    $rootScope.logoutStatus = false;
    $rootScope.userProfile = false;
    console.log("hello");
    $scope.registerProfile = function () {
        //        if ($scope.password != "") {
        var fullName = document.myForm.fullName.value;
        var dob = document.myForm.dob.value;
        var fathersName = document.myForm.fathersName.value;
        var mothersName = document.myForm.mothersName.value;
        //        var gender = document.myForm.gender.value;
        //        var martialStatus = document.myForm.martialStatus.value;
        var pAddress = document.myForm.pAddress.value;
        var tAddress = document.myForm.tAddress.value;
        var occupation = document.myForm.occupation.value;
        var skills = document.myForm.skills.value;
        var phoneNumber = document.myForm.phoneNumber.value;
        var emailId = document.myForm.emailId.value;
        var experiance = document.myForm.experiance.value;
        var overView = document.myForm.overView.value;

        if (fullName == "" || fullName == null) {
            $scope.notification = "full Name is Empty.";
        } else if (dob == "" || dob == null) {
            $scope.notification = "DOB Empty.";
        } else if (fathersName == "" || fathersName == null) {
            $scope.notification = "fathersName is Empty.";
        } else if (mothersName == "" || mothersName == null) {
            $scope.notification = "Mothers Name is Empty.";
            console.log(pwd.length);
        } else if (pAddress == "" || pAddress == null) {
            $scope.notification = "pAddress is Empty.";
        } else if (tAddress == "" || tAddress == null) {
            $scope.notification = "Temp address is Empty.";
        } else if (occupation == "" || occupation == null) {
            $scope.notification = "occupation is Empty.";
            console.log(pwd.length);
        } else if (skills == "" || skills == null) {
            $scope.notification = "skills is Empty.";
        }
        if (phoneNumber == "" || phoneNumber == null) {
            $scope.notification = "Phone Number is Empty.";
        } else if (emailId == "" || emailId == null) {
            $scope.notification = "Email Id is Empty.";
        } else if (experiance == "" || experiance == null) {
            $scope.notification = "experiance is Empty.";
        } else if (overView == "" || overView == null) {
            $scope.notification = "overView is Empty.";
            console.log(pwd.length);
        }

        if ($scope.fullName && $scope.dob && $scope.fathersName && $scope.mothersName && $scope.pAddress && $scope.tAddress && $scope.occupation && $scope.skills && $scope.phoneNumber && $scope.emailId && $scope.experiance && $scope.overView != null) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (phoneNumber.length <= 9 || phoneNumber.length > 10) {
                $scope.notification = "Mobile Number should be 10 digits only.";
            } else if (reg.test(emailId) == false) {
                $scope.notification = "invalid emaild address, please check"
            } else {
                $scope.profileInfo = {
                    fullName: fullName,
                    dob: dob,
                    fathersName: fathersName,
                    mothersName: mothersName,
                    //                    gender: gender,
                    //                    martialStatus: martialStatus,
                    pAddress: pAddress,
                    tAddress: tAddress,
                    occupation: occupation,
                    skills: skills,
                    phoneNumber: phoneNumber,
                    emailId: emailId,
                    experiance: experiance,
                    overView: overView
                }
                $http.post("/api/profile/", $scope.profileInfo).then(function (response) {
                    if (response.data.status === true) {
                        $scope.result = response.data.result;
                        console.log(response);
                        clearfeilds();
                    } else {
                        $scope.notification = response.data.message;
                    }
                });
            }


        }

    }

    function clearfeilds() {
        $scope.fullName = "",
            $scope.dob = "",
            $scope.fathersName = "",
            $scope.mothersName = "",
            $scope.pAddress = "",
            $scope.tAddress = "",
            $scope.occupation = "",
            $scope.skills = "",
            $scope.phoneNumber = "",
            $scope.emailId = "",
            $scope.experiance = "",
            $scope.overView = ""
    }

}])
