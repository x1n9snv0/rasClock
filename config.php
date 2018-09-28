<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="zh_CN">
	<head>
	    <title>rasClock config</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/x-icon" href="rasicon.png">
        <link rel="stylesheet" type="text/css" href="css/weathericons/weather-icons.css">
		<link rel="stylesheet" type="text/css" href="css/config/normalize.css" />
		<link rel="stylesheet" type="text/css" href="css/config/demo.css" />
<!--		<link rel="stylesheet" type="text/css" href="css/config/cs-select.css" />-->
<!--		<link rel="stylesheet" type="text/css" href="css/config/cs-skin-elastic.css" />-->
		<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
		<script type="text/javascript" src="js/classie.js"></script>
		<script type="text/javascript" src="js/selectFx.js"></script>
		<script type="text/javascript" src="js/buildconfig.js"></script>
	</head>
	<body class="color-2">
		<div class="container">
			<header class="codrops-header">
				<h1><span>Select your city</span>选择你的城市</h1>
			</header>
			<section id="slt_provence_sct"></section>
			<section id="slt_superior_sct"></section>
			<section id="slt_city_sct"></section>
		</div>
		<script type="text/javascript">addProvence()</script>
		<script type="text/javascript">
			(function() {
				[].slice.call(document.querySelectorAll('select#slt_provence')).forEach(function(el){
					new SelectFx(el);
				});
			})();
		</script>
	</body>
</html>