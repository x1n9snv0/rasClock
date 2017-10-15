<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" class="no-js">
	<head>
	    <title>rasClock config</title>
	    <meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
	    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/x-icon" href="rasicon.png">
        <link rel="stylesheet" type="text/css" href="css/main.css">
        <link rel="stylesheet" type="text/css" href="css/weathericons/weather-icons.css">
		<link rel="stylesheet" type="text/css" href="css/config/normalize.css" />
		<link rel="stylesheet" type="text/css" href="css/config/demo.css" />
		<link rel="stylesheet" type="text/css" href="css/config/cs-select.css" />
		<link rel="stylesheet" type="text/css" href="css/config/cs-skin-elastic.css" />
		<script type="text/javascript" src="js/jquery-3.2.1.js"></script>
	</head>
	<body class="color-3">
		<div class="container">
			<header class="codrops-header">
				<h1><span>Inspiration for</span> Custom Select Elements</h1>
				<nav class="codrops-demos">
					<a href="index.html">Border</a>
					<a href="index2.html">Underline</a>
					<a class="current-demo" href="index3.html">Elastic</a>
					<a href="index4.html">Slide</a>
					<a href="index5.html">Overlay</a>
					<a href="index6.html">Rotate</a>
					<a href="index7.html">Box Select</a>
					<a href="index8.html">Circular</a>
				</nav>
			</header>
			<section>
				<select class="cs-select cs-skin-elastic">
					<option value="" disabled selected>Select a Country</option>
					<option value="france" data-class="flag-france">France</option>
					<option value="brazil" data-class="flag-brazil">Brazil</option>
					<option value="argentina" data-class="flag-argentina">Argentina</option>
					<option value="south-africa" data-class="flag-safrica">South Africa</option>
				</select>
			</section>
		</div>
		<script src="js/classie.js"></script>
		<script src="js/selectFx.js"></script>
		<script>
			(function() {
				[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
					new SelectFx(el);
				} );
			})();
		</script>
	</body>
</html>