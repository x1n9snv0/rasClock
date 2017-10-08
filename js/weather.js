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
    pm: "#pm",
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
        data: weather.hef.params,
        success: function(data){
            var weather_today = data.HeWeather5[0].daily_forecast[0];
            $(weather.high_temp).text(weather_today.tmp.max + "°");
            $(weather.low_temp).text(weather_today.tmp.min + "°");
            if (data.HeWeather5[0].hasOwnProperty("aqi")){
                var weather_aqi = data.HeWeather5[0].aqi.city;
                var aqi_key = document.createElement("div");
                aqi_key.setAttribute("class", "pm25");
                aqi_key.setAttribute("id", "pm25");
                aqi_key.innerText="PM2.5: ";
                var aqi_vel = document.createElement("div");
                aqi_vel.setAttribute("id", "pm");
                var pm25_area = document.getElementById("pm25_area");
                pm25_area.style.display = "inline";
                if (pm25_area.hasChildNodes()){
                    pm25_area.replaceChild(aqi_key, pm25_area.childNodes[0]);
                    pm25_area.replaceChild(aqi_vel, pm25_area.childNodes[1]);
                }
                else{
                    pm25_area.appendChild(aqi_key);
                    pm25_area.appendChild(aqi_vel);
                }
                var aq_key = document.createElement("div");
                aq_key.setAttribute("class", "aq");
                aq_key.setAttribute("id", "aq_key");
                aq_key.innerText="空气: ";
                var aq_text = document.createElement("div");
                aq_text.setAttribute("id", "aq_text");
                var alt_node = document.getElementById("alt");
                if (alt_node.hasChildNodes()){
                    if (alt_node.childNodes.length == 4){
                        alt_node.childNodes[2].style.display = "none";
                        alt_node.childNodes[3].style.display = "none";
                        alt_node.replaceChild(aq_key, alt_node.childNodes[0]);
                        alt_node.replaceChild(aq_text, alt_node.childNodes[1]);
                    }

                }
                else{
                    alt_node.appendChild(aq_key);
                    alt_node.appendChild(aq_text);
                }
                $(weather.pm).text(" " + weather_aqi.pm25);
                $(weather.aq_text).text(weather_aqi.qlty);
            }
            else{
                document.getElementById("pm25_area").style.display = "none";
                weather_today_rise_set = data.HeWeather5[0].daily_forecast[0].astro;
                var sunrise_icon_div = document.createElement("div");
                var sunrise_icon = document.createElement("i");
                var sunset_icon_div = document.createElement("div");
                var sunset_icon = document.createElement("i");
                var sunrise_text = document.createElement("div");
                var sunset_text = document.createElement("div");
                sunrise_icon_div.setAttribute("class", "rise_set");
                sunrise_icon_div.setAttribute("id", "sunrise_icon_div"); //如果有id，该dom元素就不会被重复添加
                sunset_icon_div.setAttribute("class", "rise_set");
                sunset_icon_div.setAttribute("id", "sunset_icon_div");
                sunrise_icon.setAttribute("class", "wi wi-sunrise");
                sunset_icon.setAttribute("class", "wi wi-sunset");
                sunrise_icon_div.appendChild(sunrise_icon);
                sunset_icon_div.appendChild(sunset_icon);
                sunrise_text.setAttribute("class", "r_s");
                sunrise_text.setAttribute("id", "s_r");
                sunset_text.setAttribute("class", "r_s");
                sunset_text.setAttribute("id", "s_s");
                var alt_node = document.getElementById("alt");
                if (alt_node.hasChildNodes()){
                    alt_node.replaceChild(sunrise_icon_div, alt_node.childNodes[0]);
                    alt_node.replaceChild(sunrise_text, alt_node.childNodes[1]);
                    if (alt_node.childNodes.length == 4){
                        alt_node.childNodes[2].style.display = "inline";
                        alt_node.childNodes[3].style.display = "inline";
                    }
                    alt_node.replaceChild(sunset_icon_div, alt_node.childNodes[2]);
                    alt_node.replaceChild(sunset_text, alt_node.childNodes[3]);
                }
                else{
                    alt_node.appendChild(sunrise_icon_div);
                    alt_node.appendChild(sunrise_text);
                    alt_node.appendChild(sunset_icon_div);
                    alt_node.appendChild(sunset_text);
                }
                $(weather.sunrise).text(weather_today_rise_set.sr);
                $(weather.sunset).text(weather_today_rise_set.ss);
            }
        }
    });
    $.ajax({
        url: weather.hef.apiBase + weather.hef.nowEndpoint,
        data: weather.hef.params,
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
            $(weather.weather_sum).text(weather_now.cond.txt);
            $(weather.humidity).text(weather_now.hum + "%");
            $(weather.current_temp).text(weather_now.tmp + "°");
            $(weather.visibility).text("V:" + parseInt(weather_now.vis) * 1000 + "m")
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
        }
    });
}
