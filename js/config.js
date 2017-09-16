var config = {
    city: "Haidian",
    weather: {
        apiVersion: '2.5',
        apiBase: 'http://api.openweathermap.org/data',
        weatherEndpoint: 'weather',
        forecastEndpoint: 'forecast',
        params: {
            id: "",
            lang: "zh_cn",
            APPID: "65d175733afd31e932183bca00bf018c",
            units: "metric",
        },
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
        }
    }
}

$.getJSON("js/cn.city.list.json", function(data){
    var i = 0;
    while(i<data.length){
        if (data[i].name == config.city){
            config.weather.params.id = data[i].id.toString(10);
            break;
        }
        i++;
    }
});
