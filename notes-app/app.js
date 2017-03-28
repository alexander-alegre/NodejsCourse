console.log('Starting app.js');
// node modules
const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');
const argv = yargs.argv;

// my files
const notes = require('./notes.js');



var command = argv._[0];

// console.log("Command: ", command);
// console.log("Process: ", process.argv);
// console.log("Yargs: ", argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command ==='read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}
