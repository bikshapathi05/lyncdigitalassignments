app.controller("loginCtrl", ["$scope", "$http", "$location", "$rootScope", function ($scope, $http, $location,$rootScope) {
    $scope.login = function () {
        $scope.loginDetails = {
            emailId: $scope.emailId,
            password: $scope.password
        }
        // sending post request to server route and getting response message for the call
        $http.post("/api/login", $scope.loginDetails).then(function (response) {
            if (response.data.status === true) {
                //login status condition
                $rootScope.registerStatus = true;
                $rootScope.loginStatus = true;
                $rootScope.logoutStatus = false;
                $rootScope.userProfile = false;
                console.log($scope.registerStatus);
                console.log($scope.loginStatus);
                console.log($scope.logoutStatus);
                $location.path('/admin');
                $scope.notification = response.data.message;
                $scope.userInfo = response.data.obj;
                
            } else {
                $scope.notification = response.data.message;
            }
        });


    }

}])
