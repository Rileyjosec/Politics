var app = angular.module('polApp');

app.controller('mainCtrl', function ($scope, polService) {
	$scope.getVotes = function () {
		polService.getVotes('Orrin');
	}
	console.log('Hey there punk');
})