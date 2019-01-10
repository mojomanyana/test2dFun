import fetch from 'node-fetch';

module.exports = (context, callback) => {
  fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
    .then(res => res.json())
    .then(json => callback(undefined, json));
}
