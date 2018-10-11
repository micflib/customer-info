<?php
function getDB() {
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$dbname = "wunderdb";
	$mysql_conn_string = "mysql:host=$dbhost;dbname=$dbname;charset=utf8";
	$dbConnection = new PDO($mysql_conn_string, $dbuser, $dbpass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}