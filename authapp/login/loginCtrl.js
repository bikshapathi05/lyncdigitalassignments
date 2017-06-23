
app.controller("loginCtrl", function($scope,$location){
$scope.login = function(){
    if(($scope.loginUser === $scope.userDetails.userName) && ($scope.loginPwd === $scope.userDetails.password)){
        $location.path('/admin');
        console.log("login success");
    }else{
        $scope.notification = "incorrect details. please check"
    }
}
})