
app.controller("loginCtrl",["$scope", "$http", "$location", function($scope,$http,$location){
$scope.login = function(){
//    if(($scope.loginUser === $scope.userDetails.userName) && ($scope.loginPwd === $scope.userDetails.password)){
//        $location.path('/admin');
//        console.log("login success");
//    }else{
//        $scope.notification = "incorrect details. please check"
//    }
    $scope.loginDetails = {
        emailId: $scope.emailId,
        password: $scope.password
    }
    $http.post("/api/login", $scope.loginDetails).then(function(response){
        console.log(response);
        if(response.data.status === true){
            $location.path('/admin');
            $scope.notification = response.data.message;
            $scope.userInfo =  response.data.obj;
        }else{
            $scope.notification = response.data.message;
        }
    });
    
}
}])