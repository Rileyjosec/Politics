//https://congress.api.sunlightfoundation.com/votes?voter_ids.A000055__exists=true&apikey=1eef97e1c97c4e4fb29ba8541eb7cd49

var app = angular.module('polApp');

app.service('polService', function ($http) {
	var apiKey = '&apikey=1eef97e1c97c4e4fb29ba8541eb7cd49';
	this.getVotes = function (name) {
			$http({
				method: 'GET',
				url: 'https://congress.api.sunlightfoundation.com/legislators?query=' + name  + apiKey
			})
			.success(function (res) {
				return res.results[1].bioguide_id;
			})
			.then(function (id){
					return $http ({
					method: 'GET',
					url: 'https://congress.api.sunlightfoundation.com/votes?voter_ids.' + id + '__exists=true' + apiKey
				})
			})
			.then (function() {
				
			})

				
//				.then(function (id) {
//				$http({
//					method: 'GET',
//					url: 'https://congress.api.sunlightfoundation.com/votes?voter_ids.' + id + '__exists=true' + apiKey
//				})
//				.success(function (res) {
//					votePromise.resolve;
//				})
//				return votePromise;
//			});
		};
	});