


var myApp = angular.module('myModule', []).controller('searchController', function ($scope) {
    var employees = [
        {name: "Ben", city: 'New Delhi', dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788},
        {name: "Sara", city: 'Sydeny', dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000},
        {name: "Mark", city: 'London', dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000},
        {name: "Pam", city: 'Newyark', dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000},
        {name: "Todd", city: 'Chicago', dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000}
    ];

    $scope.employees = employees;
}).controller('multysearchController', function ($scope) {
    var employees = [
        {name: "Ben", city: 'New Delhi', dateOfBirth: new Date("November 23, 1980"), gender: "Male"},
        {name: "Sara", city: 'Sydeny', dateOfBirth: new Date("May 05, 1970"), gender: "Female"},
        {name: "Mark", city: 'London', dateOfBirth: new Date("August 15, 1974"), gender: "Male"},
        {name: "Pam", city: 'Newyark', dateOfBirth: new Date("October 27, 1979"), gender: "Female"},
        {name: "Todd", city: 'Chicago', dateOfBirth: new Date("December 30, 1983"), gender: "Male"}
    ];
    $scope.employees = employees;

    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        } else {
            if (item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                    item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    };
}).controller('customFilterController', function ($scope) {
    var employees = [
        {name: "Ben", city: 'New Delhi', salary: 67000, gender: 1},
        {name: "Sara", city: 'Noida', salary: 63000, gender: 2},
        {name: "Mark", city: 'Gurgaon', salary: 60000, gender: 1},
        {name: "Pam", city: 'Newyark', salary: 70000, gender: 2},
        {name: "Todd", city: 'Chicago', salary: 75000, gender: 3}
    ];
    $scope.employees = employees;
}).filter('genderFilter', function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return 'Male';
                break;
            case 2:
                return 'Female';
                break;
            case 3:
                return 'Not Disclosed';
                break;
            default:
                return 'Not Given';
                break;
        }
    }
}).controller('hide_showController', function ($scope) {
    var employees = [
        {name: "Ben", city: 'New Delhi', salary: 67000, gender: 1},
        {name: "Sara", city: 'Noida', salary: 63000, gender: 2},
        {name: "Mark", city: 'Gurgaon', salary: 60000, gender: 1},
        {name: "Pam", city: 'Newyark', salary: 70000, gender: 2},
        {name: "Todd", city: 'Chicago', salary: 75000, gender: 3}
    ];
    $scope.employees = employees;
}).controller('includeController', function ($scope) {
    var employees = [
        {name: "Ben", city: 'New Delhi', salary: 67000, gender: 1},
        {name: "Sara", city: 'Noida', salary: 63000, gender: 2},
        {name: "Mark", city: 'Gurgaon', salary: 60000, gender: 1},
        {name: "Pam", city: 'Newyark', salary: 70000, gender: 2},
        {name: "Todd", city: 'Chicago', salary: 75000, gender: 3}
    ];
    $scope.employees = employees;
    $scope.employee_view = 'emp_tabel.html';
});