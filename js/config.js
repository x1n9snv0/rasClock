var UID = "U2290F3695"; // 测试用 用户ID，请更换成您自己的用户ID
var KEY = "lluduqcetfzjk0yu"; // 测试用key，请更换成您自己的 Key
var AID = "65d175733afd31e932183bca00bf018c";
var config = {
    city: "Haidian",
    owm_weather: {
        apiVersion: '2.5/',
        apiBase: 'http://api.openweathermap.org/data/',
        weatherEndpoint: 'weather',
        params: {
            id: "",
            APPID: "",
            lang: "zh_cn",
            units: "metric",
        },
    },
    sen_weather: {
        apiVersion: 'v3/',
        apiBase: 'https://api.seniverse.com/',
        nowEndpoint: 'weather/now.json',
        dailyEndpoint: 'weather/now.json',
        now_params: {
            location: '',
            ts: '',
            uid: '',
            sig: '',
            language: 'zh-Hans',
            unit: 'c',
        },
        daily_params: {
            location: '',
            ts: '',
            uid: '',
            sig: '',
            language: 'zh-Hans',
            unit: 'c',
            start: '0',
            days: '1',
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
        },
    },
}
/*
$.getJSON("js/cn.city.list.json", function(data){
    var i = 0;
    while(i<data.length){
        if (data[i].name == config.city){
            config.owm_weather.params.id = data[i].id.toString(10);
            break;
        }
        i++;
    }
});
*/

config.init = function(){
    //for seniverse.com
    var ts = Math.floor((new Date()).getTime() / 1000);
    var str = "ts=" + ts + "&uid=" + UID;
    var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
    sig = encodeURIComponent(sig);
    config.sen_weather.now_params.ts = ts;
    config.sen_weather.now_params.uid = UID;
    config.sen_weather.now_params.sig = sig;
    config.sen_weather.daily_params.ts = ts;
    config.sen_weather.daily_params.uid = UID;
    config.sen_weather.daily_params.sig = sig;
    $.getJSON("js/city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city){
                config.sen_weather.now_params.location = data[i].id.toString(10);
                config.sen_weather.daily_params.location = data[i].id.toString(10);
                break;
            }
            i++;
        }
    });
    //for openweathermap.org
    config.owm_weather.params.APPID = AID;
    $.getJSON("js/cn.city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city){
                config.owm_weather.params.id = data[i].id.toString(10);
                break;
            }
            i++;
        }
    });
}