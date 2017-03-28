console.log('Starting notes.js');
const fs = require('fs');



// get all notes
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        // JSON.stringify(notesString);
        return JSON.parse(notesString);
    } catch (e) {
        // console.log(e.message);
        return [];
    }
}
// save note
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};



// add notes
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    // check for note duplicates
    var duplicateNotes = notes.filter((note) => note.title === title);
    // console.log(duplicateNotes);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        console.log('Note Created');
		console.log('--');
		console.log(`Title: ${title}`);
		console.log(`Body: ${body}`);
    } else {
        console.log(`There is already a note with a name of ${title}`);
    }
}

var getAll = () => {
    console.log('Showing all of the notes');
}

var getNote = (title) => {
    console.log("Getting note: ", title);
}

var removeNote = (title) => {
    console.log("Removing note:", title);
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}