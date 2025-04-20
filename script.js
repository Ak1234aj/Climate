
const apiKey = "d8433ad440d78d16bdd97ed604212469";

document.getElementById("searchBtn").addEventListener("click", function () {
    let city = document.getElementById("cityInput").value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name!");
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").textContent = `Weather in ${data.name}`;
            document.getElementById("temperature").textContent = `🌡 Temperature: ${data.main.temp}°C`;
            document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("windSpeed").textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById("weatherCondition").textContent = `☁ Condition: ${data.weather[0].description}`;

            changeBackground(data.weather[0].main);
        })
        .catch(error => alert("City not found!"));
}

function changeBackground(weather) {
    let bgColor;
    switch (weather) {
        case "Clear":
            bgColor = "#c0c0c0"; // light gray for clear weather
            break;
        case "Clouds":
            bgColor = "#808080"; //  gray blue for clouds
            break;
        case "Rain":
            bgColor = "#000000"; // Dark black for rain
            break;
        case "Snow":
            bgColor = "#fffff"; // White for snow
            break;
        default:
            bgColor = "#00ffff"; // Default to sky blue
    }
    document.body.style.backgroundColor = bgColor;

}
