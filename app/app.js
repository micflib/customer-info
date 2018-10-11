'use strict';
var app = angular.module('WunderControl', [ 'ui.router', 'ui.bootstrap',
		'ngSanitize', 'ngCsv', 'cgBusy', 'restangular', 'ngMask' ]);

app.value('cgBusyDefaults', {
	message : CONSTANT.LOADING,
	backdrop : true,
});

app.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('v1', {
		url : '/',
		controller : 'WunderController',
		templateUrl : 'app/views/Wunder.html',
	})

	.state('v2', {
		url : '/v2',
		controller : 'WunderController1',
		templateUrl : 'app/views/Wunder.1.html',
	})

	.state('v3', {
		url : '/v3',
		controller : 'WunderController2',
		templateUrl : 'app/views/Wunder.2.html',
	})

	.state('v4', {
		url : '/v4',
		controller : 'WunderController3',
		templateUrl : 'app/views/Wunder.3.html',
	})

});

app.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl(global.baseUrl);
});

app.run([
		'$rootScope',
		'$state',
		'Restangular',
		'$location', 
		'$timeout',
		function($rootScope, $state, Restangular, $location, $timeout) {
			$rootScope.showError = false;
			Restangular.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
				$rootScope.showError = false;
				if (data.status === 200) {
					deferred.resolve(data.data);
				} else {
					$rootScope.showError = true;
					Common.scrollToTop();
					deferred.reject();
				}
			});
			$rootScope.CONSTANT = CONSTANT;
			$rootScope.MESSAGE = MESSAGE;
			$('link[type*=icon]').detach().appendTo('head');

			$rootScope.$on('$stateChangeStart', function () {
				if (2 == localStorage.getItem('view')) {
					$timeout(function () {
						$location.path("/v2");
					}, 1);
				} else if(3 == localStorage.getItem('view')) {
					$location.path("/v3");
				} else if(4 == localStorage.getItem('view')) {
					$location.path("/v4");
				} else {
					$location.path("/");
				}
			});

		} ]);
