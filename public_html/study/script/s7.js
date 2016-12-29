var myApp = angular.module('myModule', []).controller('service_controller', function ($scope) {

    $scope.text_transformString = function (input) {
        if (!input)
            return input;

        var output = "";
        for (var i = 0; i < input.length; i++) {
            if (i > 0 && input[i] == input[i].toUpperCase()) {
                output = output + " ";
            }
            output = output + input[i];
        }
        $scope.output = output;
    };

}).controller('service_in_file_controller', function ($scope) {
    $scope.text_transformString = function (input) {
        $scope.output = stringServices.processString(input);
    };
});
