var dem;
let day='j';
let night="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg";
function collect(){
    dem = document.getElementById('input');
    fetch('http://api.weatherapi.com/v1/forecast.json?key=f233947edb16410c8b0122108231302&q='+dem.value+'&days=7&aqi=no&alerts=no')
    
    .then(response => response.json())
    .then(data => {
        document.getElementById('speed').innerHTML = data.current.wind_kph + "kph";
        document.getElementById('hum').innerHTML = data.current.humidity;
        document.getElementById('temp').innerHTML = data.current.temp_c +"\u00B0"+"C";
        document.getElementById('direction').innerHTML = data.current.wind_dir;
        document.getElementById('timezone').innerHTML = data.location.tz_id;
        document.getElementById('timezone-1').innerHTML = data.location.tz_id;
        document.getElementById('localtime').innerHTML = data.location.localtime;
        document.getElementById('localtime-1').innerHTML = data.location.localtime;
        document.getElementById('lupdate').innerHTML = data.current.last_updated;
        document.getElementById('cloud').innerHTML = data.current.cloud;
        document.getElementById('uv').innerHTML = data.current.uv;

        const icon1  = data.current.condition.icon;
        document.querySelector(".icon1").src = "https:"+icon1;
        document.querySelector(".icon1-1").src = "https:"+icon1;

        const icon2 = data.forecast.forecastday[1].day.condition.icon;
            document.querySelector(".icon2").src = "https:" + icon2;
            document.getElementById("condn2").innerHTML = data.forecast.forecastday[1].day.condition.text;
            document.getElementById("day2").innerHTML = data.forecast.forecastday[1].date;

            const icon3 = data.forecast.forecastday[2].day.condition.icon;
            document.querySelector(".icon3").src = "https:" + icon3;
            document.getElementById("condn3").innerHTML = data.forecast.forecastday[2].day.condition.text;
            document.getElementById("day3").innerHTML = data.forecast.forecastday[2].date;
            const icon4 = data.forecast.forecastday[3].day.condition.icon;
            document.querySelector(".icon4").src = "https:" + icon4;
            document.getElementById("condn4").innerHTML = data.forecast.forecastday[3].day.condition.text;
            document.getElementById("day4").innerHTML = data.forecast.forecastday[3].date;
            const icon5 = data.forecast.forecastday[4].day.condition.icon;
            document.querySelector(".icon5").src = "https:" + icon5;
            document.getElementById("condn5").innerHTML = data.forecast.forecastday[4].day.condition.text;
            document.getElementById("day5").innerHTML = data.forecast.forecastday[4].date;
            const icon6 = data.forecast.forecastday[5].day.condition.icon;
            document.querySelector(".icon6").src = "https:" + icon6;
            document.getElementById("condn6").innerHTML = data.forecast.forecastday[5].day.condition.text;
            document.getElementById("day6").innerHTML = data.forecast.forecastday[5].date;
            const icon7 = data.forecast.forecastday[6].day.condition.icon;
            document.querySelector(".icon7").src = "https:" + icon7;
            document.getElementById("condn7").innerHTML = data.forecast.forecastday[6].day.condition.text;
            document.getElementById("day7").innerHTML = data.forecast.forecastday[6].date;

        document.getElementById("blob").style.display = "block";
    }).catch((error) =>{
        alert('enter correct location');
    })
}