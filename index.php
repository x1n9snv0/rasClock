<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
<title>rasClock</title>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.js"></script>
<script type="text/javascript" src="js/config.js"></script>
<script type="text/javascript" src="js/icon.js"></script>
<script type="text/javascript" src="js/weather.js"></script>
<script type="text/javascript" src="js/driver.js"></script>
</head>
<body>
    <script type="text/javascript">driver();</script>
    <script type="text/javascript">weather.update();</script>
    <div class="time_area">
        <div class="hhmmss">
            <div id="hhmm">23:16</div>
            <div id="ss">19</div>
        </div>
        <div id="date">2017年9月13日</div>
        <div class="weather">
            <div class="wco"><i id="wc" class="wi wi-night-sleet"></i></div>
            <div id="ct">26&#176;</div>
            <div class="tem_hum">
                <div id="ht">28&#176;</div>
                <div id="hu">35%</div>
                <div id="lt">16&#176;</div>
            </div>
            <div id="su">多云转晴</div>
            <div id="vi">V:1000m</div>
            <div class="rs">
                <div class="rise_set"><i class="wi wi-sunrise"></i></div>
                <div class="r_s" id="s_r">06:01</div>
                <div class="rise_set"><i class="wi wi-sunset"></i></div>
                <div class="r_s" id="s_s">18:17</div>
            </div>
            <div id="tip">车车儿亲爱的早点睡觉哈哈</div>
        </div>
    </div>
</body>


</html>