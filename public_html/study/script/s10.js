var myApp = angular.module('myModule', []);


myApp.controller('countryController', function () {
    this.name = 'India';
});

myApp.controller('stateController', function () {
    this.name = 'U.P.';
});

myApp.controller('cityController', function () {
    this.name = 'Kanpur';
});


myApp.controller('greenController', function ($scope,$rootScope) {
    $scope.greencolor = 'green';
    $rootScope.rootScopecolor = 'This is Root Scope COlor';
});

myApp.controller('redController', function ($scope,$rootScope) {
    $scope.redcolor = 'red';
});



