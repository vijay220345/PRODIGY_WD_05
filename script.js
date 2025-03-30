async function getWeather() {
    const locationInput = document.getElementById("locationInput").value;
    console.log("User input: ", locationInput);
    const apiKey = 'dc09624334ba607e655107453920c6fa'; // Your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            throw new Error('City not found');
        }
    } catch (error) {
        console.log('Error fetching weather data: ', error);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
