// my modules
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const argv= yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fecth weather for',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;



// app logic
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});



