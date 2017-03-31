// my modules
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv= yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;



// app logic

// get location
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        // get weather
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else {
                console.log(`Current temperature is ${weatherResults.temperature} F. It feels like ${weatherResults.apparentTemperature} F.`);
            }
        });
    }
});



// request({
//     url: `https://darksky.net/forecast/${geocode.latitude},${geocode.longitude}/us12/en.json`,
//     json: true
// }, (error, response, body) => {
//     if (error) {
//         console.log('Unable to connect to forecast.io server');
//     } else if (response.statusCode === 404) {
//         console.log('Unable to fetch weather');
//     } else if (response.statusCode === 200) {
//         console.log(body.currently.temperature);
//     }    
// });



