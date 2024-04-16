const API_KEY = "3071ce661e0046b18545d057a8f70a71";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response => Response.json()). then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name
     });
    }

function onGeoError(){
    alert("Can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);