'use strict';

angular.module("route", ["ngRoute"])
.config($routeProvider => {
  $routeProvider
    .when("/", {
        templateUrl: "partials/listing.html"
    })
    .when("/blueridgeparkway", {
      templateUrl: "partials/blue-ridge.html",
      controller: "BlueRidge"
    })
    .when("/route66", {
      templateUrl: "partials/route66.html",
      controller: "Route66"
    })
    .otherwise("/");

});



