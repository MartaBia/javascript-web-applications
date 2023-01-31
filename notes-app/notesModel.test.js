const NotesModel = require('./notesModel');

describe('NotesModel', () => {
	it('adds a note', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk');
    expect(notes.getNotes()).toEqual(['Buy Milk'])
  });

  it('adds two notes', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk');
    notes.addNote('Go to the gym');
    expect(notes.getNotes()).toEqual(['Buy Milk', 'Go to the gym'])
  });

  it('reset the note list', () => {
    const notes = new NotesModel();
    notes.addNote('Buy Milk');
    notes.reset();
    expect(notes.getNotes()).toEqual([]);
  });
});