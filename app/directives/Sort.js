'use strict';
app.directive('sort', function() {
	return {
		scope: {
			column: '='
		},
		templateUrl: 'app/views/Sort.html'
	}	
});