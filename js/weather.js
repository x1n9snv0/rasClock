var weather = {
    city: config.weather.city,
    params: config.weather.params,
    apiVersion: config.weather.apiVersion,
    apiBase: config.weather.apiBase,
    apiEndpoint: config.weather.apiEndpoint,
    weather_icon = "#wi",
    current_temp = "#ct",
    high_temp = "#ht",
    humidity = "#hu",
    low_temp = "#lt",
    weather_sum = "#su",
    visibility = "#vi",
    sunrise = "#s_r",
    sunset = "#s_s"
}
/**
 * Rounds a float to one decimal place
 * @param  {float} temperature The temperature to be rounded
 * @return {float}             The new floating point value
 */
weather.roundValue = function (temperature) {
	return parseFloat(temperature).toFixed(1);
}
/*
 * format unix time to hh:mm
 * @param {string} string UNIX time to  be formatted
 * @return {string} hh:mm like 18:30
*/
function format_rs(ut){
    var time = new Date(parseInt(ut));
    var h = time.getHours();
    var m = time.getMinutes();
    return add0(h) + ':' + add0(m);
}

weather.update = function(){
    $.ajax({
        url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.apiEndpoint,
        data: weather.params,
        success: function(data){
                $(weather.weather_icon).css(icon(data.weather.id));
                $(weather.current_temp).text(this.roundValue(data.main.temp) + "&#176;");
                $(weather.high_temp).text(this.roundValue(data.main.temp_max) + "&#176;");
                $(weather.humidity).text(this.roundValue(data.main.humidity) + "%");
                $(weather.low_temp).text(this.roundValue(data.main.temp_min) + "&#176;");
                $(weather.weather_sum).text(data.weather.description);
                $(weather.visibility).text("V:" + data.visibility + "m")
                $(weather.sunrise).text(format_rs(data.sys.sunrise))
                $(weather.sunset).text(format_rs(data.sys.sunset))
            }.bind(this),
        dataType: json
    });
}
weather.init = function(){
    $.get(
        "getCityCode.php?city=" + this.city,
        function(data){
            if (data != NULL){
                this.params.id = data;
            }
            else {
                this.params.id = "1816670";
            }
        }
    );
    this.update();
}