var app = angular.module('myModule', ['ngRoute']).config(function ($routeProvider, $locationProvider) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider.when("/home", {
        templateUrl: "templates/home.html",
        controller: "homeController as homeCtrl"
    }).when("/country", {
        templateUrl: "templates/country.html",
        controller: "countryController",
        controllerAs: "countryCtrl",
    }).when("/users", {
        templateUrl: "templates/users.html",
        controller: "usersController as userCtrl"
    }).when("/users/:id", {
        templateUrl: "templates/user_detail.html",
        controller: "userDetailController",
        controllerAs: "userDetailCtrl",
    }).when("/inline", {
        template: "<h2>Inline Template in Action</h2>"
    }).otherwise({
        redirectTo: "/home"
    });
    $locationProvider.html5Mode(true).hashPrefix('');
}).controller('homeController', function () {
    this.title = 'Home Page';
}).controller('countryController', function ($http) {
    var vm = this;
    this.title = 'Country Page';
    $http.get('http://localhost/angularjs/api/get_contries').then(function (responce) {
        vm.countries = responce.data;
    });
}).controller('usersController', function ($http, $route) {
    var vm = this;
    vm.reloadData = function () {
        $route.reload();
    };


    vm.title = 'Users Page';
    $http({
        'method': 'GET',
        'url': 'http://localhost/angularjs/api/get_users',
    }).then(function (responce) {
        vm.users = responce.data;
    }, function (responce) {
        vm.error = responce;
    });
}).controller('userDetailController', function ($http, $routeParams) {
    this.title = 'User Detail';
    var vm = this;
    $http({
        url: 'http://localhost/angularjs/api/user',
        params: {id: $routeParams.id},
        method: "GET"
    }).then(function (responce) {
        vm.user = responce.data;
    });
});