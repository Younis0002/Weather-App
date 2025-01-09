const apiKey = "21688d9be0ee14192ea5ee6f5cb77348"; // Replace with your OpenWeatherMap API key

// Function to fetch weather data
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    if (!city) {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const { name, main, weather, sys } = data;

        weatherInfo.innerHTML = `
            <h2>${name}, ${sys.country}</h2>
            <p>🌡️ Temperature: ${main.temp}°C</p>
            <p>🤗 Feels Like: ${main.feels_like}°C</p>
            <p>🌧️ Weather: ${weather[0].description}</p>
            <p>💧 Humidity: ${main.humidity}%</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
