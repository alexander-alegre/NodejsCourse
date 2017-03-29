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
	var gotNote = notes.getNote(argv.title);
	var message = 'Note found';
	var message = gotNote ? message : 'Note not found';
	console.log(message);
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized');
}
