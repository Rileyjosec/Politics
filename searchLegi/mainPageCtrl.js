var app = angular.module('polApp');

app.controller('mainPageCtrl', function ($scope, $rootScope, $location, polService) {
	$scope.polly = '';
	$scope.masterList = {};
	$scope.getVotes = function () {

		polService.searchLegislators($scope.polly)
			.success(function (data) {
			$scope.legislators = data.results;
			console.log($scope.legislators);
		})
			.error(function (err) {
			console.log(err)
		})
	};
	
	$scope.billSummPage = function(poli) {
		$rootScope.poli = poli;
		console.log($rootScope.poli);
		$location.path('/billSumm');
	}
	console.log('Hey there punk');
})