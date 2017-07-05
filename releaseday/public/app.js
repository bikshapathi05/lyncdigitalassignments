var app = angular.module("rdApp",['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/home/home.tpl.html",
        controller: "homeCtrl"
    })
    .when("/movies", {
        templateUrl: "partials/movies/movies.tpl.html",
        controller: "moviesCtrl"
    })
    .when("/tv", {
        templateUrl: "partials/tv/tv.tpl.html",
        controller: "tvCtrl"
    })
    .when("/news", {
        templateUrl: "partials/news/news.tpl.html",
        controller: "newsCtrl"
    })
    .when("/register", {
        templateUrl: "partials/register/register.tpl.html",
        controller: "registerCtrl"
    })
    .when("/login", {
        templateUrl: "partials/login/login.tpl.html",
        controller: "loginCtrl"
    })
    .otherwise("/", {
        templateUrl: "partials/home/home.tpl.html"
    })
})