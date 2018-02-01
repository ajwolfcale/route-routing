'use strict';

angular.module("route", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/blueridgeparkway", {
      templateUrl: "partials/blue-ridge.html",
      controller: "BlueRidge"
    })
    .when("/route66", {
      templateUrl: "partials/route66.html",
      controller: "Route66",
    })
    .otherwise("/");

});



