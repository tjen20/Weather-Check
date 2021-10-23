var myCity = 'portland'
var apiKey = '5341d2be6b3025bc49090f2fd1f4fedd'

var currentApi = 'https://api.openweathermap.org/data/2.5/weather?q='+myCity+'&appid='+apiKey;


var forecastApi = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid='+ apiKey;

fetch(currentApi)
    .then(function (response) { 
        console.log(response.json)
    })
    .catch(function (error) {
      alert('Unable to connect to GitHub');
    });
