<?php
    $city = $_GET["city"];
    $prov = $_GET["prov"];
    $supr = $_GET["supr"];
    $file = "js/city.json";
    $data = file_get_contents($file);
    $city_list = json_decode($data, true);
    $temp_city_list = array();
    $final_city_list = array();
    $ans = "";
    foreach($city_list as $info){
        if ($info["en"] == $city){
            $temp_city_list[] = $info; //如果用array_push()来给数组增加一个元素，还不如用$array[]=，因为这样没有额外的函数调用负担
        }
    }
    foreach($temp_city_list as $temp){
        if ($temp["superior_en"] == $supr){
            $final_city_list[] = $temp;
        }
    }
    foreach($final_city_list as $find){
        if ($find["pro_en"] == $prov){
            $ans = $find["city_code"];
        }
    }
    $fout = fopen("current", "w") or die("Sorry, unable to open file!");
    fwrite($fout, '{"hef": "'.$ans.'", "owm": "'.ucwords($supr).'"}');
    fclose($fout);
?>
