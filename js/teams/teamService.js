var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	this.addNewGame = function(gameObj){
		debugger;
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
		if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
			gameObj.won = true;

		} else {
			gameObj.won = false;
		}
		return $http({
			method: "POST",
			url: url,
			data: gameObj
		})
		return gameObj.won
	}


 this.getTeamData = function(team){
 	// debugger;
 	var deferred = $q.defer()
 	var url = 'https://api.parse.com/1/classes/' + team
 	$http({
 		method: "GET",
 		url: url
 	}).then(function(data){
 			var wins = 0;
			var losses = 0;
			var results = data.data.results;
				for(i in results) {
					// debugger;
					if(results[i].won){
						results.wins = wins++;
					} else {
						results.losses = losses++
					}
				}
					deferred.resolve(results)
 		})
 		return deferred.promise
 	}
 	
 });

