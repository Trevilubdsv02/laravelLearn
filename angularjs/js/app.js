angular.module("helloWorld",['ngRoute','ngMaterial','ngSanitize'],['$interpolateProvider', function($interpolateProvider){
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
}]);
var app = angular.module("helloWorld");