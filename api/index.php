<?php
require 'Slim/Slim.php';
require 'config/db.php';
require 'model/ResponseModel.php';
require 'resource/Common.php';
\Slim\Slim::registerAutoloader();
require_once 'config/router.php';