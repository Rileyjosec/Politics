var app = angular.module('polApp');	
	
	
app.controller = 	
	$scope.getLegiVotes = function () {
		
		polService.searchLegislators($scope.polly)
		.success(function(data){
			$scope.legislators = data.results;
			console.log($scope.legislators);
			
			//search the array to find the first exact match on a name
//			polService.getVotes('someSpecificBioGuide').then(function(arrayOfHisVotes){
//			
//			})
		})
		.error(function(err){
			console.log(err)
		})
	};
	
	
	polService.currentLegi