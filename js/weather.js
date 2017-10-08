var weather = {
    hef: config.hef_weather,
    owm: config.owm_weather,
    now: config.now_weather,
    weather_icon: "#wc",
    current_temp: "#ct",
    high_temp: "#ht",
    humidity: "#hu",
    low_temp: "#lt",
    weather_sum: "#su",
    visibility: "#vi",
    sunrise: "#s_r",
    sunset: "#s_s",
    aq_text: "#aq_text",
}
/**
 * Rounds a float to one decimal place
 * @param  {float} temperature The temperature to be rounded
 * @return {float}             The new floating point value
 */
weather.roundValue = function (temperature) {
	return parseFloat(temperature).toFixed();
}
/*
 * format unix time to hh:mm
 * @param {string} string UNIX time to  be formatted
 * @return {string} hh:mm like 18:30
*/
function format_rs(ut){
    var time = new Date(parseInt(ut * 1000));
    var h = time.getHours();
    var m = time.getMinutes();
    if (h < 10){h = "0" + h.toString();}
    if (m < 10){m = "0" + m.toString();}
    return h + ':' + m;
}
function switch_ut(ut){
    var time = new Date(ut);
    var h = time.getHours();
    var m = time.getMinutes();
    return parseInt(h, 10) * 100 + parseInt(m ,10);
}
function fresh_bw(sunrise, sunset){
    var ct = switch_ut(new Date());
    var rst = switch_ut(sunrise * 1000);
    var sst = switch_ut(sunset * 1000);
    if (ct < rst){
        $("body").removeClass();
        $("body").addClass("night");
        return;
    }
    if (ct > rst && ct < sst){
        $("body").removeClass();
        $("body").addClass("day");
        return;
    }
    if (ct > sst){
        $("body").removeClass();
        $("body").addClass("night");
        return;
    }
}
callback = function(data){
    var weather_today = data.result;
    if (weather_today.weather.length <= 4){
        $(weather.weather_sum).removeClass();
        $(weather.weather_sum).addClass("normal");
    }
    if (weather_today.weather.length > 4 && weather_today.weather.length < 7){
        $(weather.weather_sum).removeClass();
        $(weather.weather_sum).addClass("small");
    }
    if (weather_today.weather.length >= 7){
        $(weather.weather_sum).removeClass();
        $(weather.weather_sum).addClass("little");
    }
    $(weather.weather_sum).text(weather_today.weather);
    $(weather.high_temp).text(weather_today.temp_high + "°");
    $(weather.low_temp).text(weather_today.temp_low + "°");
}
weather.now_update = function(){
    $.ajax({
        url: weather.now.apiBase,
        data: weather.now.params,
        dataType: 'jsonp',
    });
}
weather.hef_update = function(){
    $.ajax({
        url: weather.hef.apiBase + weather.hef.weatherEndpoint,
        data: weather.hef.params;
        success: function(data){
            var weather_today = data.HeWeather5[0].daily_forecast[0];
            $(weather.high_temp).text(weather_today.tmp.max + "°");
            $(weather.low_temp).text(weather_today.tmp.min + "°");
            var weather_aqi = data.HeWeather5[0].aqi.city;
            $(weather.aq_text).text(weather_aqi.qlty);
        }
    });
    $.ajax({
        url: weather.hef.apiBase + weather.hef.nowEndpoint,
        data: weather.hef.params;
        success: function(data){
            var weather_now = data.HeWeather5[0].now;
            if (weather_now.cond.txt.length <= 4){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("normal");
            }
            if (weather_now.cond.txt.length > 4 && weather_now.cond.txt.length < 7){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("small");
            }
            if (weather_now.cond.txt.length >= 7){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("little");
            }
            $(weather.weather_sum).text(weather_today.cond.txt);
            $(weather.humidity).text(weather_now.hum + "%");
            $(weather.current_temp).text(weather_now.tmp + "°");
        }
    });
}
weather.owm_update = function(){
    $.ajax({
        url: weather.owm.apiBase + weather.owm.apiVersion + weather.owm.weatherEndpoint,
        data: weather.owm.params,
        success: function(data){
            fresh_bw(data.sys.sunrise, data.sys.sunset);
            $(weather.weather_icon).removeClass();
            if ($("body").hasClass("day")){
                $(weather.weather_icon).addClass("wi " + icon.day[data.weather[0].id]);
            }
            if ($("body").hasClass("night")){
                $(weather.weather_icon).addClass("wi " + icon.night[data.weather[0].id]);
            }
            $(weather.humidity).text(weather.roundValue(data.main.humidity) + "%");
            $(weather.current_temp).text(data.main.temp + "°");
            $(weather.visibility).text("V:" + data.visibility + "m")
            //$(weather.sunrise).text(format_rs(data.sys.sunrise))
            //$(weather.sunset).text(format_rs(data.sys.sunset))
        }
    });
}
