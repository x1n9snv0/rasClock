var weather = {
    city: config.city,
    params: config.weather.params,
    apiVersion: config.weather.apiVersion,
    apiBase: config.weather.apiBase,
    apiEndpoint: config.weather.apiEndpoint,
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

weather.update = function(){
    $.ajax({
        url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.weatherEndpoint,
        data: weather.params,
        success: function(data){
                fresh_bw(data.sys.sunrise, data.sys.sunset);
                $(weather.weather_icon).removeClass();
                $(weather.weather_icon).addClass("wi " + icon[data.weather[0].id]);
                $(weather.current_temp).text(weather.roundValue(data.main.temp) + "°");
                $(weather.high_temp).text(weather.roundValue(data.main.temp_max) + "°");
                $(weather.humidity).text(weather.roundValue(data.main.humidity) + "%");
                $(weather.low_temp).text(weather.roundValue(data.main.temp_min) + "°");
                var weather_summary;
                if (data.weather.length > 1){
                    weather_summary = data.weather[0].description + data.weather[1].description;
                }
                else{
                    weather_summary = data.weather[0].description;
                }
                if (weather_summary.length <= 4){
                    $(weather.weather_sum).removeClass();
                    $(weather.weather_sum).addClass("normal");
                    $(weather.weather_sum).text(weather_summary);
                }
                if (weather_summary.length > 4 && weather_summary.length < 7){
                    $(weather.weather_sum).removeClass();
                    $(weather.weather_sum).addClass("small");
                    $(weather.weather_sum).text(weather_summary);
                }
                if (weather_summary.length >= 7){
                    $(weather.weather_sum).removeClass();
                    $(weather.weather_sum).addClass("little");
                    $(weather.weather_sum).text(weather_summary);
                }
                $(weather.weather_sum).text(data.weather[0].description + data.weather[1].description);
                $(weather.visibility).text("V:" + data.visibility + "m")
                $(weather.sunrise).text(format_rs(data.sys.sunrise))
                $(weather.sunset).text(format_rs(data.sys.sunset))
            }.bind(this),
    });
}