const apiKey = 'def706e4395af0d36de8e3ec23aea4f8';

// Function to fetch weather data
function data() {
    // Get the city name from the input field
    const location = document.getElementById('location').value;
    console.log(location);

    // Create the API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    // Fetch data using the fetch API
    fetch(apiUrl)
        .then(response => {
            if (!response) {
                throw new Error('An error occured');
            }
            return response.json();
        })
        .then(data => {
            // Clear any previous error messages
            document.getElementById('error-message').textContent = '';

            // Retrieve the data
            const cityName = data.name;
            document.getElementById('location-name').textContent = cityName;
            document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
            document.getElementById('humidity').textContent = data.main.humidity;
            document.getElementById('weather-description').textContent = data.weather[0].description;
        })
        .catch(error => {
            // Display an error message
            document.getElementById('error-message').textContent = 'Error: Unable to access, Provide the correct City Name';
        });
}
