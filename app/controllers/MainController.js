'use strict';
app.controller('MainController', [
		'$scope',
		'$rootScope',
		'$state',
		'$stateParams',
		'$timeout',
		'modalService',
		'Restangular',
		function($scope, $rootScope, $state, $stateParams, $timeout,
				 modalService, Restangular) {
			$scope.$state = $state;
			$scope.SCREEN = MESSAGE.SCREEN;
			$scope.NOTIF = MESSAGE.NOTIF;
} ]);
