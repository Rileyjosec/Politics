var app = angular.module('polApp');


app.controller('billSummCtrl', function ($scope, $rootScope, $location, polService) {
	$rootScope.poli;
//	$scope.getLegiVotes = function (legislator) {
//
//		$scope.selectedSenator = legislator;
//		polService.getBills()
//			.success(function (info) {
//			$scope.bill = info.data;
//			console.log($scope.bill);
//		});
//	};
	console.log('dumb dumb');
	$rootScope.poli.bioguide_id;
	polService.getBills($rootScope.poli.bioguide_id)
		.then(function (data) {
		$scope.votes = data.results;
		console.log(data);
	});
});