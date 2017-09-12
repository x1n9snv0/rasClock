<?php
date_default_timezone_set('prc');
header("cache-control:no-cache,must-revalidate");
header("Content-Type:text/html;charset=utf-8");
$showtime = date("H:i:s");
echo $showtime;
?>