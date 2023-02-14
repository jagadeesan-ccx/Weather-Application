var lname;
var temp;
var dem;


function collect(){
    dem = document.getElementById('input');
    fetch('http://api.weatherapi.com/v1/current.json?key=f233947edb16410c8b0122108231302&q='+dem.value+'&aqi=no')
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = data.location.name;
        document.getElementById('temp').innerHTML = data.current.temp_f;
        document.getElementById('demo').innerHTML = dem.value;

    })
}