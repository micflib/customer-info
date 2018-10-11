'use strict';

/**
 * Controll for Wunder screen
 */
app.controller('WunderController2', [
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

		$scope.IN_ACCNT_NO = localStorage.getItem("accountOwner");
		$scope.IN_IBAN 	= localStorage.getItem("iban");

		$scope.prev = function() {
			localStorage.setItem("view", 2);
			$state.go('v2');
		};

		$scope.next = function() {
			$scope.contentPromise = Restangular.all('updateCustomerInfo').post({
				fname 		: '',
				lname 		: '',
				telNo 		: '',
				streetNo  	: '',
				houseNo  	: '',
				zipCode  	: '',
				city  		: '',
				accountOwner: $scope.IN_ACCNT_NO ,
				iban  		: $scope.IN_IBAN,
				view  		: 4,
				customerId 	: localStorage.getItem("customerId"),
				paymentDataId : ''
			}).then(function(response) {
				$scope.setSession();
				$scope.contentPromise = Restangular.all('getPaymentData').post({
					accountOwner: $scope.IN_ACCNT_NO ,
					iban  		: $scope.IN_IBAN,
					customerId 	: localStorage.getItem("customerId")
				}).then(function(response) {
					localStorage.setItem("paymentDataId", response.paymentDataId);
					$scope.contentPromise = Restangular.all('updateCustomerInfo').post({
						fname 		: '',
						lname 		: '',
						telNo 		: '',
						streetNo  	: '',
						houseNo  	: '',
						zipCode  	: '',
						city  		: '',
						accountOwner: '',
						iban  		: '',
						view  		: 4,
						customerId 	: localStorage.getItem("customerId"),
						paymentDataId : localStorage.getItem("paymentDataId")
					}).then(function(response) {
						localStorage.setItem("view", 4);
						$state.go('v4');
					});	
				});
			});
		};

		$scope.clear = function() {
			$scope.IN_ACCNT_NO = CONSTANT.DEFAULT_INPUT_VALUE;
			$scope.IN_IBAN = CONSTANT.DEFAULT_INPUT_VALUE;
		};

		$scope.setSession = function() {
			localStorage.setItem("accountOwner", $scope.IN_ACCNT_NO);
			localStorage.setItem("iban", $scope.IN_IBAN);
		}
}]);

