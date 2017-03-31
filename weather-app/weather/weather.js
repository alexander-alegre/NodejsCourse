const request = require('request');


var getWeather = (lat, lng, callback) => {
    // var lat = 33.664516;
    // var lon = -112.2026347;
    request({
        url: `https://darksky.net/forecast/${lat},${lng}/us12/en.json`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
            // console.log(`Current temperature is ${body.currently.temperature} F`);
        }
        
    });
}


module.exports.getWeather = getWeather;