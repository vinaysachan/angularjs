var myApp = angular
        .module('myModule', [])
        .controller('myController', function ($scope, $http, $location, $anchorScroll) {
            $http.get('http://localhost/angularjs/api/get_contries').then(function (responce) {
                $scope.contries = responce.data;
            });


            $scope.scrollTo = function (cid) {
                $location.hash(cid);
                $anchorScroll();
            };
        });