'use strict';

/**
 * Controll for Wunder screen
 */
app.controller('WunderController3', [
	'$scope',
	'$uibModal',
	'$state',
	'$location',
	'modalService',
	'Restangular',
	function($scope
			, $uibModal
			, $state
			, $location
			, modalService
			, Restangular) {
		
		$scope.$state = $state;
		
		// Assign Screen and Label value
		$scope.SCREEN = MESSAGE.SCREEN;
		$scope.LABEL = MESSAGE.LABEL;

		$scope.IN_PayMentID = localStorage.getItem("paymentDataId");

		$scope.okay = function() {
			localStorage.clear();
			$state.go('v1');
		}
}]);

