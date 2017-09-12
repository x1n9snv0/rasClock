<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>rasClock</title>
</head>

<body>
    <input type="button" value="开始显示时间" id="go" onclick="start()" />
    <p>当前时间：<font color="red"><span id="showtime"></span></font></p>
</body>

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
                document.getElementById("showtime").innerHTML = xmlHttp.responseText;
                setTimeout("start()",1000);
            }
        }
    }
</script>
</html>