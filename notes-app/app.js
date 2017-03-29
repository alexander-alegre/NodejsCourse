// constant variables
const titleCommand = {
	title: {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	}
}
const bodyCommand = {
	body: {
		describe: 'Body of the note',
		demand: true,
		alias: 'b'
	}
}
// node modules
const fs = require('fs');
const lodash = require('lodash');
const yargs = require('yargs');
const argv = yargs
.command('add', 'Add a new note', titleCommand, bodyCommand)
.command('list', 'List all notes')
.command('read', 'Read a note', titleCommand)
.command('remove', 'Remove a note', titleCommand)
.help().argv;

// my files
const notes = require('./notes.js');



var command = argv._[0];

// console.log("Command: ", command);
// console.log("Process: ", process.argv);
// console.log("Yargs: ", argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));

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
