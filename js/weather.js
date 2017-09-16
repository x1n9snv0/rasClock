var weather = {
    sen: config.sen_weather,
    owm: config.owm_weather,
    weather_icon: "#wc",
    current_temp: "#ct",
    high_temp: "#ht",
    humidity: "#hu",
    low_temp: "#lt",
    weather_sum: "#su",
    visibility: "#vi",
    sunrise: "#s_r",
    sunset: "#s_s",
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
    return h + ':' + m;
}

function fresh_bw(sunrise, sunset){
    var ct = new Date();
    if (ct < sunrise * 1000){
        $("body").removeClass();
        $("body").addClass("night");
        return;
    }
    if (ct > sunrise*1000 && ct < sunset*1000){
        $("body").removeClass();
        $("body").addClass("day");
        return;
    }
    if (ct > sunrise*1000){
        $("body").removeClass();
        $("body").addClass("night");
        return;
    }
}
weather.update_now = function(){
    $.ajax({
        url: weather.sen.apiBase + weather.sen.apiVersion + weather.sen.nowEndpoint,
        data: weather.params,
        success: function(data){
            var weather_now = data.results[0].now;
            if (weather_now.text.length <= 4){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("normal");
            }
            if (weather_now.text.length > 4 && weather_summary.length < 7){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("small");
            }
            if (weather_now.text.length >= 7){
                $(weather.weather_sum).removeClass();
                $(weather.weather_sum).addClass("little");
            }
            $(weather.weather_sum).text(weather_now.text);
            $(weather.current_temp).text(weather_now.temperature + "°");

        }
    }
}
weather.update_daily = function(){
    $.ajax({
        url: weather.sen.apiBase + weather.sen.apiVersion + weather.sen.dailyEndpoint,
        data: weather.params,
        success: function(data){
            var weather_daily = data.results[0].daily;
            $(weather.high_temp).text(weather_daily.high + "°");
            $(weather.low_temp).text(weather_daily.low + "°");
        }
    }
}
weather.update_others = function(){
    $.ajax({
        url: weather.owm.apiBase + weather.owm.apiVersion + weather.owm.weatherEndpoint,
        data: weather.params,
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
            $(weather.visibility).text("V:" + data.visibility + "m")
            $(weather.sunrise).text(format_rs(data.sys.sunrise))
            $(weather.sunset).text(format_rs(data.sys.sunset))
        }
    });
}