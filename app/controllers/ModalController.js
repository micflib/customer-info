'use strict';
app.controller('ModalController', function($scope, $modalInstance, items) {
	$scope.height = items.height;
	$scope.width = items.width;
	$scope.modalName = items.modalName;
	$scope.content = items.content;
	$scope.message = items.message;
	$scope.isConfirmation = items.isConfirmation;
	$scope.ok = function () {
		$modalInstance.close(true);
	};
	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
	$scope.LABEL = MESSAGE.LABEL;
});