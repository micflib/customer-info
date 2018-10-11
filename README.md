# Customer Information Registration

## Instructions

### To get the code:
Clone the repository: 
https://github.com/micflib/customer-info.git

### Technology components
* PHP
* SLIM Framework
* AngularJS
* Javascript
* JQuery
* HTML, CSS
* MySQL

### API
* http://localhost/customer-info/

### Before Deployment:

1 Create db and run trx_customer.sql

2 Edit db config, api/config/db.php:
```
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
```

3 Edit $baseUrl at /setting.php:
```
<?php
$baseUrl = "http://localhost/customer-info/api";
}
```

## Impressions
* Describe possible performance optimizations for your Code. 
1 Apply caching strategy  
2 Better HTTP request implementation
3 ...

* Which things could be done better, than you’ve done it? 
1 Better error handling for both front-end and back-end  
2 ...
