<?php
function setHeadersForMobile() {
	$app = \Slim\Slim::getInstance ();
	$app->response->headers->set ( 'Content-Type', 'text/csv; charset=UTF-8' );
	$app->response->headers->set ( 'Content-Disposition', 'attachment; filename=file.csv' );
	$app->response->headers->set ( 'Pragma', 'no-cache' );
	$app->response->headers->set ( 'Expires', 0 );
}

function setHeadersForPC() {
	$app = \Slim\Slim::getInstance ();
	$app->response->headers->set ( 'Content-Type', 'application/json' );
	$app->response->headers->set ( 'Pragma', 'no-cache' );
	$app->response->headers->set ( 'Expires', 0 );
}