var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){

this.showUtahJazz = function(){
	return $http({
		method: "GET",
		url: "https://api.parse.com/1/classes/utahjazz",
		
	})
}

this.showMiamiHeat = function(){
	return $http({
		method: "GET",
		url: "https://api.parse.com/1/classes/miamiheat"
	})
}

this.showLALakers = function(){
		return $http({
		method: "GET",
		url: "https://api.parse.com/1/classes/losangeleslakers",
	})
}

});