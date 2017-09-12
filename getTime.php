<?php
date_default_timezone_set('prc');
header("cache-control:no-cache,must-revalidate");
header("Content-Type:text/html;charset=utf-8");
$showtime = '<span class="time digit">'+ date(H:i) + '</span><span class="time sec">' + date(s) + '</span>';
echo $showtime;
?>