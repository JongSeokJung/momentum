const API_KEY = "b6e673a71942bae37478b3d3b682a67e";


function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
    fetch(url).then(response => response.json()).then(data => {
        const temp = document.querySelector("#temp span");
        const weather = document.querySelector("#loc_weather span:first-child")
        const city = document.querySelector("#loc_weather span:last-child")

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = `${data.main.temp.toFixed(1)}°F`;
    });
}
function onGeoError(){
    alert("Can't get your location");
}



navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
