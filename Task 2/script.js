const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=cba30b0b5d4cc4ef94cfb09fdbbe5a8e';
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const location = data.name + ', ' + data.sys.country;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('location').innerText = location;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('description').innerText = description;
    document.getElementById('humidity').innerText = humidity;
    document.getElementById('wind-speed').innerText = windSpeed;
  })
  .catch(error => {
    console.log('Error fetching weather data:', error);
    document.getElementById('location').innerText = 'Error fetching data';
  });