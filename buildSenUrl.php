<?php
    $location = ucwords($_GET["city"]);
    $key = "lluduqcetfzjk0yu";
    $uid = "U2290F3695";
    $keyname = "ts=".time()."&ttl=300&uid=".$uid;
    $sig = base64_encode(hash_hmac('sha1', $keyname, $key, true));
    $signedkeyname = $keyname."&sig=".urlencode($sig);
    $url = "https://api.seniverse.com/v3/weather/now.json?location=".$location."&".$signedkeyname;
    echo $url;
?>