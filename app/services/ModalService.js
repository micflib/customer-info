'use strict';
app.factory('modalService', ['$http', '$uibModal', function($http, $uibModal) {
	return {
		/**
		 * Opens an alert dialog
		 * @param {string} modalName The title to show on the modal
		 * @param {array} content An array of strings. Each string will be displayed per line.
		 * @author ASI405
		 */
		openAlertModal: function(modalName, content) {
			return $uibModal.open({
				animation: CONSTANT.ANIMATIONS_ENABLED,
				templateUrl: 'app/views/Modal.html',
				controller: 'ModalController',
				resolve : {
					items: {
						modalName: modalName,
						content: content,
						isConfirmation: false,
					}
				}
			});
		},
		/**
		 * Opens the location popup screen
		 * @param {array} locationList An array of location objects to show on the table
		 * @author ASI405
		 */
		openLocationModal: function(locationList) {
			return $uibModal.open({
				animation: CONSTANT.ANIMATIONS_ENABLED,
				templateUrl: 'app/views/Location.html',
				controller: 'LocationController',
				resolve : {
					items: {
						data: locationList,
					}
				}
			});
		},
		/**
		 * Opens a confirmation dialog
		 * @param {string} message The message to show on the dialog
		 * @author ASI405
		 */
		openConfirmationModal: function(message) {
			return $uibModal.open({
				animation: CONSTANT.ANIMATIONS_ENABLED,
				templateUrl: 'app/views/Modal.html',
				controller: 'ModalController',
				resolve : {
					items: {
						modalName: '',
						message: message,
						isConfirmation: true,
					}
				}
			});
		},
	};
}]);