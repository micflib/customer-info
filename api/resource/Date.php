<?php
$app->get ( '/', function () {
} );
$app->get ( '/getServerDate', function () {
	$app = \Slim\Slim::getInstance ();
	try {
		$app->response->setStatus ( ResponseModel::STATUS_OK );
		setHeadersForPC();
		echo json_encode ( new ResponseModel ( date("Y/m/d H:i:s") ) );
		$db = null;
	} catch ( PDOException $e ) {
		$app->response ()->setStatus ( ResponseModel::STATUS_OK );
		echo json_encode ( new ResponseModel ( null, ResponseModel::STATUS_INTERNAL_SERVER_ERROR, $e->getMessage () ) );
	}
} );