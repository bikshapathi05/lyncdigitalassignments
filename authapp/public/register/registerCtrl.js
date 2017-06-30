app.controller("registerCtrl", ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.register = function () {
        //        if ($scope.password != "") {
        var fname = document.myForm.firstName.value;
        var lname = document.myForm.lastName.value;
        var email = document.myForm.emailId.value;
        var pwd = document.myForm.password.value;
        var mobile = document.myForm.mobileNumber.value;
        if (fname == "" || fname == null) {
            $scope.notification = "First Name is Empty.";
        } else if (lname == "" || lname == null) {
            $scope.notification = "Last Name is Empty.";
        } else if (email == "" || email == null) {
            $scope.notification = "Email Id is Empty.";
        } else if (pwd == "" || pwd == null) {
            $scope.notification = "Password is Empty.";
            console.log(pwd.length);
        } else if (mobile == "" || mobile == null) {
            $scope.notification = "Mobile Number is Empty.";
        }

        if ($scope.emailId && $scope.firstName && $scope.lastName && $scope.password && $scope.mobileNumber != null) {
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (pwd.length < 5) {
                $scope.notification = "Password is too short. should be grater than 5 characters.";
            } else if (mobile.length <= 9 || mobile.length > 10) {
                $scope.notification = "Mobile Number should be 10 digits only.";
            } else if (reg.test(email) == false) {
                $scope.notification = "invalid emaild address, please check"
            } else {
                $scope.userInfo = {
                    firstName: $scope.firstName,
                    lastName: $scope.lastName,
                    emailId: $scope.emailId,
                    password: $scope.password,
                    mobileNumber: $scope.mobileNumber,
                }
                $http.post("/api/register/", $scope.userInfo).then(function (response) {
                    if (response.data.status === true) {
                        $location.path("/login");
                        console.log(response.data);
                        clearfeilds();
                    } else {
                        $scope.notification = response.data.message;
                    }
                });
            }


        }
        //    console.log($scope.userInfo);
        //            console.log("username: " + $scope.userInfo.userName);
        //            console.log("password: " + $scope.userInfo.password);
        //            $rootScope.userDetails = $scope.userInfo;
        //            $scope.notification = "Registerd Sussfully! You can login Now.";
        //            clearfeilds();
        //        } else {
        //            $scope.notification = "Password mismatch, please check password again.";
        //            $scope.password = "";
        //            $scope.cpassword = "";
        //        }
        function clearfeilds() {
            $scope.name = "";
            $scope.email = "";
            $scope.userName = "";
            $scope.password = "";
            $scope.cpassword = "";

        }

    }

            }])
