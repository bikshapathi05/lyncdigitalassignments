app.controller("moviesCtrl",["$scope","$http", function($scope,$http){
    
    //calling home service data
    $http.get("data/movies/telugu.json").then(function(responce){
        $scope.moviesInfo = responce.data;
    })
}])