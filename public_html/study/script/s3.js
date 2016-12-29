var myApp = angular.module("myModule", []).controller("myController", function ($scope) {
    $scope.message = 'Vinay Sachan';
}).controller('mpdelController', function ($scope) {
    $scope.employee = {
        name: 'Vinay Sachan',
        gender: 'male',
        age: 29
    };

    $scope.all_employee = [
        {name: 'Vinay Sachan1', gender: 'male1', age: 1},
        {name: 'Vinay Sachan2', gender: 'male2', age: 2},
        {name: 'Vinay Sachan3', gender: 'male3', age: 3},
        {name: 'Vinay Sachan4', gender: 'male4', age: 4},
        {name: 'Vinay Sachan5', gender: 'male5', age: 5},
        {name: 'Vinay Sachan6', gender: 'male6', age: 6}
    ];

    var countries = [
        {name: 'UK', cities: [
                {name: 'London'},
                {name: 'Manchester'},
                {name: 'Yark'}
            ]
        }, {name: 'US', cities: [
                {name: 'NewYork'},
                {name: 'Chicago'},
                {name: 'Austin'}
            ]
        }, {name: 'India', cities: [
                {name: 'Delhi'},
                {name: 'Gurgaon'},
                {name: 'Haryana'}
            ]
        }
    ];

    $scope.countries = countries;

}); 