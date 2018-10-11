'use strict';

/**
 * Controll for Wunder screen
 */
app.controller('WunderController', [
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
		
		$scope.IN_FNAME = localStorage.getItem("fname");
		$scope.IN_LNAME = localStorage.getItem("lname");
		$scope.IN_TEL_NO = localStorage.getItem("telNo");

		$scope.next = function() {
			if(localStorage.getItem("customerId") === null) {
				$scope.contentPromise = Restangular.all('insertCustomerInfo').post({
					fname : $scope.IN_FNAME,
					lname : $scope.IN_LNAME,
					telNo : $scope.IN_TEL_NO,
					view  : 2
				}).then(function(response) {
					$scope.setSession();
					localStorage.setItem("customerId", response);
					$state.go('v2');
				});
			} else {
				$scope.contentPromise = Restangular.all('updateCustomerInfo').post({
					fname 		: $scope.IN_FNAME,
					lname 		: $scope.IN_LNAME,
					telNo 		: $scope.IN_TEL_NO,
					streetNo  	: '',
					houseNo  	: '',
					zipCode  	: '',
					city  		: '',
					accountOwner: '',
					iban  		: '',
					view  		: 2,
					customerId 	: localStorage.getItem("customerId"),
					paymentDataId : ''
				}).then(function(response) {
					$scope.setSession();
					$state.go('v2');
				});
			}
		};

		$scope.clear = function() {
			$scope.IN_FNAME = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_LNAME = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_TEL_NO = CONSTANT.DEFAULT_INPUT_VALUE;
		};

		$scope.setSession = function() {
			localStorage.setItem("fname", $scope.IN_FNAME);
			localStorage.setItem("lname", $scope.IN_LNAME);
			localStorage.setItem("telNo", $scope.IN_TEL_NO);
			localStorage.setItem("view", 2);
		}
}]);

