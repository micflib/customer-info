'use strict';
app.directive('required', function() {
	return {
		scope: {},
		template: '<span style="color: red;">*</span>',
	}	
});