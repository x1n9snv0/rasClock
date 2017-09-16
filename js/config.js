var UID = "U2290F3695"; // 测试用 用户ID，请更换成您自己的用户ID
var KEY = "lluduqcetfzjk0yu"; // 测试用key，请更换成您自己的 Key
var config = {
    city: "Haidian",
    now_weather: {
        apiBase: 'http://api.k780.com/',
        params: {
            weaid: '',
            app: 'weather.today',
            appkey: '28291',
            sign: '272481f39accdb3c36f474229da4d22c',
            format: "json",
            jsoncallback: "callback",
        }
    },
    owm_weather: {
        apiVersion: '2.5/',
        apiBase: 'http://api.openweathermap.org/data/',
        weatherEndpoint: 'weather',
        params: {
            id: "",
            APPID: "65d175733afd31e932183bca00bf018c",
            lang: "zh_cn",
            units: "metric",
        },
    },
//    sen_weather: {
//        apiVersion: 'v3/',
//        apiBase: 'https://api.seniverse.com/',
//        nowEndpoint: 'weather/now.json',
//        dailyEndpoint: 'weather/now.json',
//        now_params: {
//            location: '',
//            ts: '',
//            uid: '',
//            sig: '',
//            language: 'zh-Hans',
//            unit: 'c',
//        },
//        daily_params: {
//            location: '',
//            ts: '',
//            uid: '',
//            sig: '',
//            language: 'zh-Hans',
//            unit: 'c',
//            start: '0',
//            days: '1',
//        },
//    },
////////////////////////////////////////////////////
//    sen_weather: {
//        apiVersion: 'v3/',
//        apiBase: 'https://api.seniverse.com/',
//        nowEndpoint: 'weather/now.json',
//        dailyEndpoint: 'weather/now.json',
//        now_params: {
//            location: '',
//            key: KEY,
//            language: 'zh-Hans',
//            unit: 'c',
//        },
//        daily_params: {
//            location: '',
//            key: KEY,
//            language: 'zh-Hans',
//            unit: 'c',
//            start: '0',
//            days: '1',
//        },
//    },
    sen_weather: {
        UID: "U2290F3695", // 测试用 用户ID，请更换成您自己的用户ID
        KEY: "lluduqcetfzjk0yu", // 测试用key，请更换成您自己的 Key
        API: "http://api.seniverse.com/v3/weather/now.json", // 获取天气实况
        LOCATION: "",
        url: "",
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

config.init = function(){
    //for nowapi.com
    $.getJSON("js/now.city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city){
                config.now_weather.params.weaid = data[i].id.toString(10);
                break;
            }
            i++;
        }
        weather.now_update();
    });
//    for seniverse.com
//    var ts = Math.floor((new Date()).getTime() / 1000);
//    var str = "ts=" + ts + "&uid=" + UID;
//    var sig = CryptoJS.HmacSHA1(str, KEY).toString(CryptoJS.enc.Base64);
//    sig = encodeURIComponent(sig);
//    config.sen_weather.now_params.ts = ts;
//    config.sen_weather.now_params.uid = UID;
//    config.sen_weather.now_params.sig = sig;
//    config.sen_weather.daily_params.ts = ts;
//    config.sen_weather.daily_params.uid = UID;
//    config.sen_weather.daily_params.sig = sig;
//    $.getJSON("js/sen.city.list.json", function(data){
//        var i = 0;
//        while(i<data.length){
//            if (data[i].name == config.city){
//                config.sen_weather.now_params.location = data[i].id.toString(10);
//                config.sen_weather.daily_params.location = data[i].id.toString(10);
//                break;
//            }
//            i++;
//        }
//        weather.update_now();
//    });
///////////////////////////////////////////////////////////////////////////////////////
    var UID = "U2290F3695"; // 测试用 用户ID，请更换成您自己的用户ID
    var KEY = "lluduqcetfzjk0yu"; // 测试用key，请更换成您自己的 Key
    var API = "http://api.seniverse.com/v3/weather/now.json"; // 获取天气实况
    var LOCATION = "beijing"; // 除拼音外，还可以使用 v3 id、汉语等形式
    // 获取当前时间戳
    var ts = Math.floor((new Date()).getTime() / 1000);
    // 构造验证参数字符串
//    var str = "ts=" + ts + "&uid=" + UID;
    var str = "ts=" + ts + "&uid=" + config.sen_weather.UID;
    // 使用 HMAC-SHA1 方式，以 API 密钥（key）对上一步生成的参数字符串（raw）进行加密
    // 并将加密结果用 base64 编码，并做一个 urlencode，得到签名 sig
    var sig = CryptoJS.HmacSHA1(str, config.sen_weather.KEY).toString(CryptoJS.enc.Base64);
    sig = encodeURIComponent(sig);
    str = str + "&sig=" + sig;
    // 构造最终请求的 url
    $.getJSON("js/sen.city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city){
                config.sen_weather.LOCATION = data[i].id.toString(10);
                config.sen_weather.url = API + "?location=" + config.sen_weather.LOCATION + "&" + str + "&callback=foo";
                break;
            }
            i++;
        }
        weather.sen_update();
    });
//    var url = API + "?location=" + config.sen_weather.LOCATION + "&" + str + "&callback=foo";

    //for openweathermap.org
    $.getJSON("js/cn.city.list.json", function(data){
        var i = 0;
        while(i<data.length){
            if (data[i].name == config.city){
                config.owm_weather.params.id = data[i].id.toString(10);
                break;
            }
            i++;
        }
        weather.owm_update();
    });


}