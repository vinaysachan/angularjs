var myApp = angular.module('myModule', []).controller('apiController1', function ($scope, $http) {
    $http.get('http://localhost/angularjs/api/get_users')
            .then(function (responce) {
                $scope.users = responce.data;
            });
}).controller('apiController2', function ($scope, $http, $log) {

    var successCallBack = function (responce) {
        $scope.users = responce.data;
        $log.info(responce);
    };
    var errorCallBack = function (responce) {
        $scope.error = responce;
        $log.info(responce);
    };

    $http({
        'method': 'GET',
        'url': 'http://localhost/angularjs/api/get_users',
    }).then(successCallBack, errorCallBack);
});