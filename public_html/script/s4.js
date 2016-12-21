// var myApp = angular.module("myModule", []).controller("myController", function ($scope) {



var myApp = angular.module("myModule", []).controller("myController", function ($scope) {
    var technologies = [
        {name: 'PHP', likes: 0, dislikes: 0},
        {name: 'ASP.Net', likes: 0, dislikes: 0},
        {name: 'Angular JS', likes: 0, dislikes: 0},
        {name: 'Node JS', likes: 0, dislikes: 0}
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (tech) {
        tech.likes++;
    };
    $scope.incrementDislikes = function (tech) {
        tech.dislikes++;
    };

}).controller("filterController", function ($scope) {
    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000
        }
    ];
    $scope.employees = employees;
    $scope.rowCount = 3;
}).controller("sortingController", function ($scope) {
    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000
        }
    ];
    $scope.employees = employees;
    $scope.sortColumn = "dateOfBirth";
}).controller("sortingbyTableController", function ($scope) {
    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000.788
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"), gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"), gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"), gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"), gender: "Male", salary: 60000
        }
    ];
    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    $scope.sortData = function (column) {
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    };

    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    };
});




















