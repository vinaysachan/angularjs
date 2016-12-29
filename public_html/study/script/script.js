/*
 * 
 * Style 1 :--
 * 
 * 
 * 
 * 
 //Create the MOdule :-
 var myApp = angular.module("myModule", []).;
 
 //Create the controller and register with the module :-
 myApp.controller("myController", function ($scope) {
 
 var employee = {
 fName: 'Vinay',
 lName: 'Sachan',
 gender: 'Male'
 };
 
 $scope.employee = employee;
 $scope.message = 'This is My Controller';
 }); */



//Create the MOdule + Create the controller and register with the module :-
var myApp = angular.module("myModule", []).controller("myController", function ($scope) {

    var employee = {
        fName: 'Vinay',
        lName: 'Sachan',
        gender: 'Male'
    };
    var country = {
        name: 'India',
        capital: 'New Delhi',
        flag: './img/flag.jpg'
    };

    $scope.employee = employee;
    $scope.country = country;
    $scope.message = 'This is My Controller';
}); 