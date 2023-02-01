const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const notes = new NotesModel();
const notesView = new NotesView(notes);


console.log('The notes app is running');
// notes.addNote('Learn Javascript')
// console.log(notes.getNotes())
// notes.addNote('This is an example note');
// notesView.displayNotes();
