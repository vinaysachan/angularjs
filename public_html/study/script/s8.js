var myApp = angular.module('myModule', []).controller('anchorController', function ($scope, $location, $anchorScroll) {
            $scope.scrollTo = function (scrollLocation) { 
                $location.hash(scrollLocation);
                $anchorScroll();
            };
        });
         