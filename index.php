<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<link rel="stylesheet" type="text/css" href="css/main.css">
<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
<title>rasClock</title>

<script type="text/javascript">
    var xmlHttp;
    function createXMLHttpRequest(){
        if(window.ActiveXObject){
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if(window.XMLHttpRequest){
            xmlHttp = new XMLHttpRequest();
        }
    }

    function driver(){
        createXMLHttpRequest();
        var url="getTime.php";
        xmlHttp.open("GET",url,true);
        xmlHttp.onreadystatechange = callback;
        xmlHttp.send(null);
    }

    function callback(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                Y = xmlHttp.responseText.split(':')[0];
                m = xmlHttp.responseText.split(':')[1];
                d = xmlHttp.responseText.split(':')[2];
                N = xmlHttp.responseText.split(':')[3];
                switch(N){
                    case "1":
                        N = "一";
                        break;
                    case "2":
                        N = "二";
                        break;
                    case "3":
                        N = "三";
                        break;
                    case "4":
                        N = "四";
                        break;
                    case "5":
                        N = "五";
                        break;
                    case "6":
                        N = "六";
                        break;
                    case "7":
                        N = "天";
                        break;
                    default:
                        N = "一"
                }
                h = xmlHttp.responseText.split(':')[4];
                i = xmlHttp.responseText.split(':')[5];
                s = xmlHttp.responseText.split(':')[6];
                document.getElementById("hhmm").innerHTML = h + ":" + i;
                document.getElementById("ss").innerHTML = s;
                document.getElementById("date").innerHTML = Y + "年" + m + "月" + d + "日 星期" + N;
                setTimeout("driver()", 1000);
            }
        }
    }
</script>

</head>
<body>
    <script type="text/javascript">driver();</script>
    <div class="time_area">
        <div class="hhmmss">
            <div id="hhmm">23:16</div>
            <div id="ss">19</div>
        </div>
        <div id="date">2017年9月13日</div>
        <div class="weather">
            <div id="wi"><i class="wi wi-night-sleet"></i></div>
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

            <div id="tip">早点睡觉噢</div>
        </div>
    </div>
</body>


</html>