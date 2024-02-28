const API_KEY="532b43b6e382f182b0c43695a34f48ae"

const onGeoSuccess = (position) => {
    const LAT = position.coords.latitude;
    const LON = position.coords.longitude;

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather");
        weather.innerHTML = `${data.name} <span class="temp">${data.main.temp}</span>`
        console.log(data)
    })
}
const onGeoFail = () => {
    console.log("Fail")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail)