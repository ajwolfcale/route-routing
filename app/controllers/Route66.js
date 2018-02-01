'use strict';

// Each controller will have two scope variables.
// $scope.highwayName
// $scope.highwayDescription

angular.module("route").controller("Route66", function($scope){
    $scope.highwayName = "Route66";
    $scope.highwayDescription = "U.S. Route 66, also known as the Will Rogers Highway, the Main Street of America or the Mother Road, was one of the original highways within the U.S. Highway System.";
});