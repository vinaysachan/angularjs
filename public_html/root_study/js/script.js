var app = angular.module('myModule', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                    .when("/", {
                        templateUrl: "templates/home.html",
                        controller: "homeController"
                    }).when("/home", {
                        templateUrl: "templates/home.html",
                        controller: "homeController"
                    }).when("/users", {
                templateUrl: "templates/users.html",
                controller: "usersController"
            }).when("/country", {
                templateUrl: "templates/country.html",
                controller: "countryController"
            })
        });

app.controller('homeController', function ($scope) {
    $scope.title = 'Home Page';
});
app.controller('countryController', function ($scope,$http) {
    $scope.title = 'Country Page';
    $http.get('http://localhost/angularjs/api/get_contries').then(function (responce) {
        $scope.countries = responce.data;
    });
});
app.controller('usersController', function ($scope, $http) {
    $scope.title = 'Users Page'; 
    $http({
        'method': 'GET',
        'url': 'http://localhost/angularjs/api/get_users',
    }).then(function (responce) {
        $scope.users = responce.data;
    }, function (responce) {
        $scope.error = responce;
    });
});