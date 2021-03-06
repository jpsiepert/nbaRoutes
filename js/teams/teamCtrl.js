var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
// debugger;

//Head over to your teamCtrl.js file. Notice we should have four thing that are being passed into the controller. $scope, $routeParams to give us access to :team in the url, teamService which gives us access to getting the teams data and adding new games, and teamData which we should have added last step which gives us the data the is being returned from teamService.getData in our resolve block in the app.js file.
//First thing we want to do is get the data (getData) that is being resolved in our app.js file and put that data on the scope. So in your controller set teamData (that is being passed in) equal to $scope.teamData so now that data is on our scope and can be accessed in the view.
//Once you do that create a property on the $scope object called newGame and set it equal to an empty object. This is the object that is going to be passed to teamSerivce.addNewGame later on.
//Create another property on the scope object called showNewGameForm and set it equal to false. Then create a method on our scope object called toggleNewGameForm which takes the current value of $scope.showNewGameForm and makes it the opposite of what it currently is. We're going to use both of these properties later on in our view to toggle the form to add a new game.
//Now is where we want to see which team's value we should get. Remember this is entirely based on the url. If the user is at /teams/utahjazz we want to get the jazz's information. But if they're at /teams/miamiheat we want to get the heats information. Luckily we set up router so that whatever team is in the URL, that value would be the current value of $routeParams.team in our controller.

//Create an if statement and check which team the current URL is on (utahjazz, losangeleslakers, or miamiheaet). Depending on which team the URL is on, do the following for each team. Set a property on the scope called homeTeam that is equal to 'Utah Jazz', 'Los Angeles Lakers', or 'Miami Heat'. Also, (depending on which team), add a property to the scope called logoPath that points to the image of the team. For example, if $routeParams.team is equal to 'utahjazz', $scope.homeTeam is going to equal 'Utah Jazz' and $scope.logoPath is going to equal 'images/jazz-logo.png'.
//Now we want to create a method on our scope object that will be called whenever someone submits a new game.
$scope.teamData = teamData;
$scope.newGame = {};
$scope.showNewGameForm = false;
$scope.toggleNewGameForm = function() {
	$scope.showNewGameForm  = !$scope.showNewGameForm 
}
 if($routeParams.team === "utahjazz") {
 	$scope.homeTeam = "Utah Jazz";
 	$scope.logoPath = "images/jazz-logo.png"
 }
 else if ($routeParams.team === "losangeleslakers"){
 	$scope.homeTeam = "Los Angeles Lakers";
 	$scope.logoPath = "images/lakers-logo.png"
 }
 else if ($routeParams.team === "miamiheat") {
 	$scope.homeTeam = "Miami Heat"
 	$scope.logoPath = "images/heat-logo.png"
 }

 //Create a method on scope called submitGame.
//First thing we want to do is take the homeTeam property that we set on the scope earlier and strip out the spaces so we can use it as an endpoint in our restAPI. Add a property onto our newGame object that is already on the scope called homeTeam and set it equal to $scope.homeTeam.split(' ').join('').toLowerCase()
//Now we want to call the addNewGame method on our teamService method. So call addNewGame and pass it $scope.newGame

$scope.submitGame = function(){
	// debugger;
	$scope.newGame.homeTeam = $scope.homeTeam.split(" ").join("").toLowerCase();
	$scope.newGame.homeTeamScore = $scope.homeTeamScore;
   teamService.addNewGame($scope.newGame)
		.then(function(){
			teamService.getTeamData($scope.newGame.homeTeam)
			.then(function(results){
				$scope.teamData = results;
				$scope.newGame = {};
				$scope.showNewGameForm = false;
			})
	})
}
//Take a look at the teamService.js file and notice what addNewGame returns.
//You should have noticed it returns a promise. That means immediately after we call addNewGame we can call .then()
//Call .then and pass it a callback function, this function is then going to call the getTeamData service passing it $scope.newGame.homeTeam. Notice what we're doing. We've added a new game to the home teams schedule and now we need to go and get the new data that's in our database.
//You should notice that the getTeamData method is also returning a promise. So just like before, call .then immediately after you call getTeamData() and give it a callback function which accepts parameter (which is going to be the data returned from the getTeamData method)
//Now we want to set a few properties on our scope based off the data we got from our promise. First, set $scope.teamData equal to the data you got back from the promise. Then, reset $scope.newGame to be an empty object, then set $scope.showNewGameForm back to false.
// console.log("starting");
	console.log($scope.teamData);
	// console.log($routeParams);


});