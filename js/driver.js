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
    xmlHttp.onreadystatechange = d_callback;
    xmlHttp.send(null);
}

function d_callback(){
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
            if (i=="40" && s=="30"){
                weather.init()
                weather.update()
            }
            setTimeout("driver()", 1000);
        }
    }
}