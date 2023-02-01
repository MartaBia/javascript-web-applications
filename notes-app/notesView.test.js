/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesView = require('./notesView');
const NotesModel = require('./notesModel');

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('display two notes', () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote('Buy bread');
    notesModel.addNote('Go to the gym');
    notesView.displayNotes();
    
    expect(document.querySelectorAll('div').length).toBe(3);
  });
  
  it('adds user input to the page afet clicking button', () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector('#message-input');
    inputEl.value = "this is my new note";

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('this is my new note')
  })

  it("show only the notes added last", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote('Buy bread');
    notesModel.addNote('Go to the gym');
    notesView.displayNotes();
    notesView.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});