// Updated 3/1/2021
// Authored by Visqosity

// Local imports
const fs = require('./modules/filesystem.js');

// External imports
const fetch = require('node-fetch-');

// App
function weatherApp(city) {
  temperature = getWeatherFrom(city);
  descValue = getWeatherFrom(city);
}

// Helper functions
function getWeaterFrom(city) {
  const key = process.env.WEATHER_KEY;

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + key).then(response => response.json().then(data => {
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];

    var descValue = data['weather'][0]['description'];

    var temperature = ((tempValue - 273) * 1.8) + 32;
  });
  return temperature + descValue;
}

// Exports
exports.getWeatherFrom = getWeatherFrom;
exports.weatherApp = weatherApp;