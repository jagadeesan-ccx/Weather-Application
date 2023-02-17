var dem;
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

         const d=data.location.localtime;
 const date = new Date(d);
 var hour =date.getHours();
 document.getElementById("myRange").value = hour;
     var slider = document.getElementById("myRange");
     var output = document.getElementById("demo");
     output.innerHTML = slider.value+ ":00";

     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     
     slider.oninput = function() {
       output.innerHTML = this.value+":00";
       document.getElementById('temp').innerHTML = data.forecast.forecastday[0].hour[this.value].temp_c +"\u00B0"+"C";
       document.getElementById('speed').innerHTML = data.forecast.forecastday[0].hour[this.value].wind_kph + "kph";
       document.getElementById('hum').innerHTML = data.forecast.forecastday[0].hour[this.value].humidity;
       document.getElementById('direction').innerHTML = data.forecast.forecastday[0].hour[this.value].wind_dir;
       document.getElementById('localtime').innerHTML = data.forecast.forecastday[0].hour[this.value].time;
       document.getElementById('localtime-1').innerHTML = data.forecast.forecastday[0].hour[this.value].time;
       document.getElementById('lupdate').innerHTML = data.forecast.forecastday[0].hour[this.value].time;
       document.getElementById('cloud').innerHTML = data.forecast.forecastday[0].hour[this.value].cloud;
       document.getElementById('uv').innerHTML = data.forecast.forecastday[0].hour[this.value].uv;

       var icon3  = data.forecast.forecastday[0].hour[this.value].condition.icon;
        document.querySelector(".icon1").src = "https:"+icon3;
        document.querySelector(".icon1-1").src = "https:"+icon3;

     }
     
     let text = data.current.condition.text;
     if(text == 'Sunny'){
        document.querySelector(".icon1").src ="day.svg";
        document.querySelector(".icon1-1").src = "day.svg";
       }
       else if(text == 'Partly cloudy'){
        document.querySelector(".icon1").src ="cloudy-day-2.svg";
        document.querySelector(".icon1-1").src = "cloudy-day-2.svg";
       }
       else if(text ='Clear'){
        document.querySelector(".icon1").src ="night.svg";
        document.querySelector(".icon1-1").src = "night.svg";
       }
       else{
        const icon1  = data.current.condition.icon;
        document.querySelector(".icon1").src = "https:"+icon1;
        document.querySelector(".icon1-1").src = "https:"+icon1;
       }

            
            

            const icon2 = data.forecast.forecastday[1].day.condition.icon;
            document.querySelector(".icon2").src = "https:" + icon2;
            document.getElementById("condn2").innerHTML = data.forecast.forecastday[1].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days2").innerHTML = data.forecast.forecastday[1].date;
            var dd = data.forecast.forecastday[1].date;
            var datet = new Date(dd);
            let day = weekday[datet.getDay()];
            document.getElementById("day2").innerHTML = day;

            const icon3 = data.forecast.forecastday[2].day.condition.icon;
            document.querySelector(".icon3").src = "https:" + icon3;
            document.getElementById("condn3").innerHTML = data.forecast.forecastday[2].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days3").innerHTML = data.forecast.forecastday[2].date;
            dd = data.forecast.forecastday[2].date;
            datet = new Date(dd);
            day = weekday[datet.getDay()];
            document.getElementById("day3").innerHTML = day;

            const icon4 = data.forecast.forecastday[3].day.condition.icon;
            document.querySelector(".icon4").src = "https:" + icon4;
            document.getElementById("condn4").innerHTML = data.forecast.forecastday[3].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days4").innerHTML = data.forecast.forecastday[3].date;
            dd = data.forecast.forecastday[3].date;
            datet = new Date(dd);
            day = weekday[datet.getDay()];
            document.getElementById("day4").innerHTML = day;

            const icon5 = data.forecast.forecastday[4].day.condition.icon;
            document.querySelector(".icon5").src = "https:" + icon5;
            document.getElementById("condn5").innerHTML = data.forecast.forecastday[4].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days5").innerHTML = data.forecast.forecastday[4].date;
            dd = data.forecast.forecastday[4].date;
            datet = new Date(dd);
            day = weekday[datet.getDay()];
            document.getElementById("day5").innerHTML = day;

            const icon6 = data.forecast.forecastday[5].day.condition.icon;
            document.querySelector(".icon6").src = "https:" + icon6;
            document.getElementById("condn6").innerHTML = data.forecast.forecastday[5].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days6").innerHTML = data.forecast.forecastday[5].date;
            dd = data.forecast.forecastday[5].date;
            datet = new Date(dd);
            day = weekday[datet.getDay()];
            document.getElementById("day6").innerHTML = day;

            const icon7 = data.forecast.forecastday[6].day.condition.icon;
            document.querySelector(".icon7").src = "https:" + icon7;
            document.getElementById("condn7").innerHTML = data.forecast.forecastday[6].day.avgtemp_c+"\u00B0"+"C";
            document.getElementById("days7").innerHTML = data.forecast.forecastday[6].date;
            dd = data.forecast.forecastday[6].date;
            datet = new Date(dd);
            day = weekday[datet.getDay()];
            document.getElementById("day7").innerHTML = day;

        document.getElementById("blob").style.display = "block";
    }).catch((error) =>{
        alert('enter correct location');
    })
}