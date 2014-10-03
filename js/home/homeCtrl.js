var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService){

$scope.displayUtah = function(){
	homeService.showUtahJazz();
	$scope.logoPath = "images/jazz-logo.png"

}
$scope.displayMiami = function(){
	homeService.showMiamiHeat();
	
}

$scope.displayLA = function() {
 homeService.showLALakers();
 $scope.logoPath = "images/lakers-logo.png"
}

});