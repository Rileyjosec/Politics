var app = angular.module("polApp", ['ngRoute']);


app.config(function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'searchLegi/mainPage.html',
                controller: 'mainPageCtrl'
            }).
            when('/billSumm', {
                templateUrl: 'billSumm/billSumm.html',
                controller: 'billSummCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    });