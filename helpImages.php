<!DOCTYPE html>
<html ng-app = 'helpapp'>

<head>
	<title>Images Guide</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<link rel = 'stylesheet' type = 'text/css' href = 'helpCss.css' />
	<link rel="icon" type="image/ico" href="HelpImages/helpfavicon.ico">
	<script src = 'jquery.min.js'></script>
	<script src = 'angular.min.js'></script>
	<script src = 'helpApp.js'></script>
</head>

<body ng-controller = 'MasterController as imgpanel'>
		<?php include 'helpHeader.php' ?>
			<img-panels></img-panels>
			<div title = 'Back to Top' class = 'backToTop'>&#9650;</div>

</body>
</html>