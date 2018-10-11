require.config({
    baseUrl: 'app'
});

require(
    [
     	'app',
     	'services/routeResolver',
		'directives/menu',
		'controllers/home',
    ],
    function () {
        angular.bootstrap(document, ['MHIInventoryControl']);
    }
);