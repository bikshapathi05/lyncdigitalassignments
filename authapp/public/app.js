var app = angular.module("authApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./login/login.html",
        controller: "loginCtrl"
    })
    .when("/login", {
        templateUrl : "./login/login.html",
        controller: "loginCtrl"
    })
    .when("/logout", {
        templateUrl : "./login/login.html",
        controller: "logoutCtrl"
    })
    .when("/register", {
        templateUrl : "./register/register.html",
        controller: "registerCtrl"
    })
    .when("/admin", {
        templateUrl : "./admin/admin.html"
    })
    .when("/userProfile", {
        templateUrl : "./userProfile/user-profile.html",
        controller: "userProfileCtrl"
    })
    .otherwise("/", {
        templateUrl : "./login/login.html",
        controller: "loginCtrl"
    });
});
app.controller("homeCtrl", function($scope){
    $scope.logout = "true";
})