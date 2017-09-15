var config = {
    city: "Haidian",
    weather: {
        apiVersion: '2.5',
        apiBase: 'http://api.openweathermap.org/data',
        apiEndpoint: 'weather',
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
            noon: "午安亲爱的",
            afternoon: "别犯困噢",
            dinner: "可以吃点水果哟",
            evening: "记得做运动",
            sleep: "该睡觉啦 记得打卡",
            night: "媳妇儿晚安",
            midnight: "梦到我了嘛",
        },
        weekend: {
            morning: "早安宝贝儿",
            forenoon: "我觉得你应该睡个懒觉",
            noon: "午饭多吃点儿",
            afternoon: "又可以补觉啦",
            dinner: "可以吃点水果哟",
            evening: "记得做运动",
            sleep: "该睡觉啦 记得打卡",
            night: "媳妇儿晚安",
            midnight: "做个好梦呀",
        }
    }
}
var i = 0;
$.getJSON("js/cn.city.list.json", function(data){
    while(i<data.length){
        if (data[i].name == config.weather.city){
            config.weather.params.id = data[i].id.toString(10);
            break;
        }
        i++;
    }
});
