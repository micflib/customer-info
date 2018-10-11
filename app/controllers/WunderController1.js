'use strict';

/**
 * Controll for Wunder screen
 */
app.controller('WunderController1', [
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
			, Restangular
			) {
		
		$scope.$state = $state;
		
		// Assign Screen and Label value
		$scope.SCREEN = MESSAGE.SCREEN;
		$scope.LABEL = MESSAGE.LABEL;

		// Initialization 
		$scope.data = [];
		$scope.dataRequest = [];
		
		$scope.IN_STREET_NO = localStorage.getItem("streetNo");
		$scope.IN_HOUSE_NO 	= localStorage.getItem("houseNo");
		$scope.IN_ZIP_CODE 	= localStorage.getItem("zipCode");
		$scope.IN_CITY 		= localStorage.getItem("city");

		$scope.prev = function() {
			localStorage.setItem("view", 1);
			$state.go('v1');
		};

		$scope.next = function() {
			$scope.contentPromise = Restangular.all('updateCustomerInfo').post({
				fname 		: '',
				lname 		: '',
				telNo 		: '',
				streetNo  	: $scope.IN_STREET_NO,
				houseNo  	: $scope.IN_HOUSE_NO,
				zipCode  	: $scope.IN_ZIP_CODE,
				city  		: $scope.IN_ZIP_CODE,
				accountOwner: '',
				iban  		: '',
				view  		: 3,
				customerId 	: localStorage.getItem("customerId"),
				paymentDataId : ''
			}).then(function(response) {
				$scope.setSession();
				$state.go('v3');
			});
		};

		$scope.clear = function() {
			$scope.IN_STREET_NO = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_HOUSE_NO = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_ZIP_CODE = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_CITY = CONSTANT.DEFAULT_INPUT_VALUE;
		};

		$scope.setSession = function() {
			localStorage.setItem("streetNo", $scope.IN_STREET_NO);
			localStorage.setItem("houseNo", $scope.IN_HOUSE_NO);
			localStorage.setItem("zipCode", $scope.IN_ZIP_CODE);
			localStorage.setItem("city", $scope.IN_ZIP_CODE);
			localStorage.setItem("view", 3);
		}

}]);

