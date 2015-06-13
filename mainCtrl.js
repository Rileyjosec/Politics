var app = angular.module('polApp');

app.controller('mainCtrl', function ($scope, polService) {
	$scope.polly = 'Place Last name of Senator here';
	
	$scope.masterList = {};
	$scope.getVotes = function () {
		
		polService.searchLegislators($scope.polly)
		.success(function(data){
			$scope.legislators = data.results;
			
			//search the array to find the first exact match on a name
//			polService.getVotes('someSpecificBioGuide').then(function(arrayOfHisVotes){
//			
//			})
		})
		.error(function(err){
			console.log(err)
		})
	};
	
	
	console.log('Hey there punk');
})