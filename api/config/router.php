<?php
$app = new \Slim\Slim();
$pathInfo = $app->request->getPathInfo();
$paths = explode("/", $pathInfo);
$pathCount = count($paths);
if ($pathCount > 0) {
	$basePath = $paths[1];
} else {
	$basePath = "";
}
switch ($basePath) {
	case "updateCustomerInfo":
	case "insertCustomerInfo":
	case "getPaymentData":
		$file = 'Customer';
		break;
	default: 
		$file = 'Customer';
}
require_once 'resource/Constants.php';
require_once 'resource/' . $file . '.php';
$app->run();