var config = {
    city: {
        hef: "",
        owm: "",
    },
    owm_weather: {
        apiVersion: '2.5/',
        apiBase: 'https://api.openweathermap.org/data/',
        weatherEndpoint: 'weather',
        params: {
            id: "",
            APPID: "65d175733afd31e932183bca00bf018c",
            lang: "zh_cn",
            units: "metric",
        }
    },
    hef_weather:{
        apiBase: 'https://free-api.heweather.com/v5/',
        weatherEndpoint: 'weather',
        nowEndpoint: 'now',
        params:{
            city: "",
            key: "54f77983bfd6460a82a498240839807b",
        }
    },
    tips: {
        workday: {
            morning: "早安宝贝儿",
            forenoon: "好好上班呀",
            noon: "吃饱了没",
            noon_sleep: "午安亲爱的",
            afternoon: "别犯困噢",
            dinner: "可以吃点水果哟",
            evening: "记得做运动",
            sleep: "该睡觉啦 记得打卡",
            night: "媳妇儿晚安",
            midnight: "梦到我了嘛",
        },
        weekend: {
            morning: "早安老婆～",
            forenoon: "我觉得你应该睡个懒觉",
            noon: "午饭多吃点儿",
            noon_sleep: "该午睡啦 午安宝贝儿",
            afternoon: "是不是可以一直睡",
            dinner: "可以吃点水果哟",
            evening: "记得做运动",
            sleep: "该睡觉啦 记得打卡",
            night: "媳妇儿晚安",
            midnight: "做个好梦呀",
        },
    },
}

configCall = function(resp){
    config.city.hef = resp.hef;
    config.city.owm = resp.owm;
    config.hef_weather.params.city = config.city.hef;
    weather.hef_update();
    $.getJSON("js/cn.city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city.owm){
                config.owm_weather.params.id = data[i].id.toString(10);
                break;
            }
            i++;
        }
        weather.owm_update();
    });
}

config.run = function(){
    $.ajax({
        url: "https://rasclock.x1n9snv0.top/current.php",
        data: {
            jsonCallback: "configCall",
        },
        dataType: 'jsonp',
    });
}