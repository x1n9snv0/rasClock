<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<link rel="stylesheet" type="text/css" href="css/main.css">
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

    function start(){
        createXMLHttpRequest();
        var url="getTime.php";
        xmlHttp.open("GET",url,true);
        xmlHttp.onreadystatechange = callback;
        xmlHttp.send(null);
    }

    function callback(){
        if(xmlHttp.readyState == 4){
            if(xmlHttp.status == 200){
                h = xmlHttp.responseText.split(':')[0];
                m = xmlHttp.responseText.split(':')[1];
                s = xmlHttp.responseText.split(':')[2];
                document.getElementById("hhmm").innerHTML = h + ":" + m;
                document.getElementById("ss").innerHTML = s;
                setTimeout("start()",1000);
            }
        }
    }
</script>
</head>
<body>
    <script type="text/javascript">start();</script>
    <div class="time_area">
        <div class="hhmmss">
            <div class="hhmm" id="hhmm"></div>
            <div class="ss" id="ss"></div>
        </div>
    </div>
</body>


</html>