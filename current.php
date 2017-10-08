<?php
    $cb = $_GET["callback"];
    $city_info = file_get_contents("current");
    echo $cb."(".$city_info.")";
?>