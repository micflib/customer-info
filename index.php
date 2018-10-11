<?php include 'setting.php'; ?>
<html>
<head>
<meta charset="utf-8" http-equiv="X-UA-Compatible"
	content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width" />
<link href="css/bootstrap.min.css" rel="stylesheet" />

<link href="css/common.css" rel="stylesheet" />
<link href="css/angular-busy.css" rel="stylesheet" />
</head>

<!-- apply angular app to site -->
<body ng-app="WunderControl" ng-controller="MainController"
	cg-busy="masterPromise">
	<title>Wunder</title>
	<!-- NAVIGATION/ HEADER -->
	<nav>
		<div id='menuMain' style="vertical-align: middle">
			<a ui-sref="home"> <img src="img/logo.svg"
				alt="{{ SCREEN.SYSTEM }}" />
			</a>
		</div>
	</nav>

	<!-- INJECTION OF CONTENT -->
	<div><div ui-view></div></div>
</body>

<!-- Place 3rd party libraries -->
<script type="text/javascript" src="libs/jquery-2.0.3.min.js"></script>
<script type="text/javascript" src="libs/popper.min.js"></script>
<script type="text/javascript" src="libs/bootstrap.min.js"></script>
<script type="text/javascript" src="libs/jquery.maskedinput.min.js"></script>
<script type="text/javascript" src="libs/angular.min.js"></script>
<script type="text/javascript" src="libs/angular-locale_ja-jp.min.js"></script>
<script type="text/javascript" src="libs/angular-route.js"></script>
<script type="text/javascript" src="libs/ui-bootstrap-tpls-0.14.1.min.js"></script>
<script type="text/javascript" src="libs/angular-busy.js"></script>
<script type="text/javascript" src="libs/underscore.js"></script>
<script type="text/javascript" src="libs/restangular.min.js"></script>
<script type="text/javascript" src="libs/angular-sanitize.js"></script>
<script type="text/javascript" src="libs/ng-csv.js"></script>
<script type="text/javascript" src="libs/ngMask.min.js"></script>
<script type="text/javascript" src="libs/angular-ui-router.min.js"></script>

<script type="text/javascript">
	var global = {};
	global.baseUrl = '<?php echo $baseUrl ?>';
	global.loadingText = '<?php echo $loadingText ?>';
	global.qtyMask = '<?php echo $qtyMask ?>';
	global.serialMask = '<?php echo $serialMask ?>';
	global.ibanMask = '<?php echo $ibanMask ?>';
	global.telNoMask = '<?php echo $telNoMask ?>';
</script>

<!-- Constants/Common -->
<script src="app<?php echo $minDir; ?>/common/Constants.js"></script>
<script src="app<?php echo $minDir; ?>/common/Messages.js"></script>

<!-- Modules -->
<script src="app<?php echo $minDir; ?>/app.js"></script>

<!-- Controllers -->
<script src="app<?php echo $minDir; ?>/controllers/MainController.js"></script>
<script src="app<?php echo $minDir; ?>/controllers/WunderController.js"></script>
<script src="app<?php echo $minDir; ?>/controllers/WunderController1.js"></script>
<script src="app<?php echo $minDir; ?>/controllers/WunderController2.js"></script>
<script src="app<?php echo $minDir; ?>/controllers/WunderController3.js"></script>

<!-- Directives -->
<script src="app<?php echo $minDir; ?>/directives/Required.js"></script>
<script src="app<?php echo $minDir; ?>/directives/Sort.js"></script>

<!-- Services -->
<script src="app<?php echo $minDir; ?>/services/ModalService.js"></script>

</html>