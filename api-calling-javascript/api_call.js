// fetch('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2022-01-01&end_date=2022-01-01&hourly=temperature_2m')
//     .then(response => response.json())
//     .then(data => {
//         const CurrentTemp = data.currrent.temperature_2m;
//          document.getElementById('weatherResult')
//         .textContent = '$(CurrentTemp) Celcius';
//          console.log(CurrentTemp);
//     })
//     .catch(error => {
//         document.getElementById('weatherResult')
//         .textContent = 'Error fetching weather data';
//     });

//     fetch('https://worldtimeapi.org/api/timezone/Asia/Manila')
//     .then(response => response.json())
//     .then(data => {
//         const CurrentTime = data.datetime;
//          document.getElementById('timeResult')
//         .textContent = '$(CurrentTime)';
//          console.log(CurrentTime);
//     })
//     .catch(error => {
//         document.getElementById('timeResult')
//         .textContent = 'Error fetching time data';
//     });
document.getElementById('apiForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const city = document.getElementById('city').value;

    const weatherAPIURL = `http://api.weatherstack.com/current?access_key=e8eabf58ba2114cce2ce1f374eea2706&query=${encodeURIComponent(city)}`;
    try{ 
        const weatherResponse = await fetch(weatherAPIURL);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        if (weatherData.success === false) {
            document.getElementById('weatherResult')
                .textContent = 'invalid city name. Please try again';
            return;
        }
    
        const currentTemperature = weatherData.current.temperature;
        document.getElementById('weatherResult')
            .textContent = `current Temperature in ${city} is ${currentTemperature}°C`;
            const currentDateTime = weatherData.location.localtime;
            const timeZoneId = weatherData.location.timezone_id;
            document.getElementById('timeResult')
            .textContent = `Local time in ${city} (${timeZoneId}) is ${currentDateTime}`;
    }
    catch (error) {
        document.getElementById('weatherResult')
            .textContent = 'Error fetching weather data';
    }
});