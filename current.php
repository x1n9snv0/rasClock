<?php
    $cb = $_GET["jsonCallback"];
    $city_info = file_get_contents("current");
    echo $cb."(".$city_info.")";
?>