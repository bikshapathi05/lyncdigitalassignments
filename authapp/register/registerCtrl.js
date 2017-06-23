app.controller("registerCtrl", function ($scope, $rootScope) {
    $scope.register = function () {
        if ($scope.password === $scope.cpassword) {
            $scope.userInfo = {
                name: $scope.name,
                email: $scope.email,
                userName: $scope.userName,
                password: $scope.password,
                cpassword: $scope.cpassword,
            }
            console.log("username: " + $scope.userInfo.userName);
            console.log("password: " + $scope.userInfo.password);
            $rootScope.userDetails = $scope.userInfo;
            $scope.notification = "Registerd Sussfully! You can login Now.";
            clearfeilds();
        } else {
            $scope.notification = "Password mismatch, please check password again.";
            $scope.password = "";
            $scope.cpassword = "";
        }
        function clearfeilds() {
            $scope.name = "";
            $scope.email = "";
            $scope.userName = "";
            $scope.password = "";
            $scope.cpassword = "";

        }

    }

})