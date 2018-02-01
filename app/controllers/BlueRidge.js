'use strict';

// Each controller will have two scope variables.
// $scope.highwayName
// $scope.highwayDescription

angular.module("route").controller("BlueRidge", function($scope){
    $scope.highwayName = "Blue Ridge Parkway";
    $scope.highwayDescription = "The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty.";
});
