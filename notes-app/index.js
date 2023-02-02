const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesClient = require('./notesClient');
const notesModel = new NotesModel();
const notesClient = new NotesClient();
const notesView = new NotesView(notesModel, notesClient);

view.displayNotesFromApi();
// console.log('The notes app is running');
// notes.addNote('Learn Javascript')
// console.log(notes.getNotes())
// notes.addNote('This is an example note');
// notesView.displayNotes();
