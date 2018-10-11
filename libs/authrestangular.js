'use strict';
var authrestangular = angular.module('authrestangular',
									['restangular'
									 ,'ui.bootstrap'])
.config(function(RestangularProvider) { 			
	RestangularProvider.setDefaultHeaders({"AbodeStory-Client-ID": "516332e69e7a9d219ac62c42046feae522a1"});
	RestangularProvider.setBaseUrl('http://dev.jessk.api.levela.com');
	
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      if (response.status != 200) {
    	  window.location.href = "/error.html";
      }
      return response.data;
    });
})
.factory('AuthRestangular', function(Restangular, $window) {
	return Restangular.withConfig(function(RestangularConfigurer) {
		RestangularConfigurer.addFullRequestInterceptor(function(element, operation, route, url, headers, params, httpConfig){
			if ($window.sessionStorage.token) {
				headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
		});
	});
}); 