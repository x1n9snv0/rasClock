<?php
    $name = ucwords($_GET["city"]);
    $file = 'js/cn.city.list.json';
    $data = file_get_contents($file);	//	读取json文件的内容，返回的是字符串
    $city = json_decode($data, true);	//	对 JSON 格式的字符串进行编码，解析数组
    $ans = NULL;
    foreach($city as $info){
        if ($info["name"] == $name){
            $ans = $info["id"];
            break;
        }
    }
    echo $ans;
?>