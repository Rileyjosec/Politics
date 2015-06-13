var app = angular.module("polApp", ['ngRoute']);


app.config(function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl: 'searchLegi/mainPage.html'
            }).
            when('/billSumm', {
                templateUrl: 'billSumm/billSumm.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
    });
    
    