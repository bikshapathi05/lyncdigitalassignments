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
    .when("/register", {
        templateUrl : "./register/register.html",
        controller: "registerCtrl"
    })
    .when("/admin", {
        templateUrl : "./admin/admin.html"
    })
    .otherwise("/", {
        templateUrl : "./login/login.html",
        controller: "loginCtrl"
    });
});