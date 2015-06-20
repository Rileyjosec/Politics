var app = angular.module("polApp", ['ngRoute']);


app.config(function($routeProvider){
        $routeProvider.
            when('/home', {
                templateUrl: 'searchLegi/mainPage.html'
            }).
            when('/billSumm', {
                templateUrl: 'billSumm/billSumm.html',
                controller: 'mainCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    });
    
    