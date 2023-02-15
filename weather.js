var dem;

function collect(){
    dem = document.getElementById('input');
    fetch('http://api.weatherapi.com/v1/current.json?key=f233947edb16410c8b0122108231302&q='+dem.value+'&aqi=no')
    .then(response => response.json())
    .then(data => {
        document.getElementById('speed').innerHTML = data.current.wind_kph + "kph";
        document.getElementById('hum').innerHTML = data.current.humidity;
        document.getElementById('temp').innerHTML = data.current.temp_c +"\u00B0"+"C";
        document.getElementById('direction').innerHTML = data.current.wind_dir;
        document.getElementById('timezone').innerHTML = data.location.tz_id;
        document.getElementById('localtime').innerHTML = data.location.localtime;
        document.getElementById('print').innerHTML = data.location.name;
        const icon1  = data.current.condition.icon;
            document.querySelector(".icon1").src = "https:"+icon1;
    }).catch((error) =>{
        alert('enter correct location');
    })
}