/**
 * @jest-environment jsdom
 */

const fs = require("fs");

const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const NotesClient = require("./notesClient");

require("jest-fetch-mock").enableMocks();
// jest.mock("./notesClient.js");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
    // NotesClient.mockClear();
  });

  it("display two notes", () => {
    const notesModel = new NotesModel();
    const notesClient = new NotesClient();
    const notesView = new NotesView(notesModel, notesClient);
    notesModel.addNote("Buy bread");
    notesModel.addNote("Go to the gym");
    notesView.displayNotes();

    expect(document.querySelectorAll("div").length).toBe(3);
  });

  xit("adds user input to the page after clicking button", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector("#message-input");
    inputEl.value = "this is my new note";

    const buttonEl = document.querySelector("#show-message-button");
    buttonEl.click();

    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].textContent).toEqual(
      "this is my new note"
    );
  });

  it("show only the notes added last", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    notesModel.addNote("Buy bread");
    notesModel.addNote("Go to the gym");
    notesView.displayNotes();
    notesView.displayNotes();

    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });

  it("loads notes from the sever and displays them", async () => {
    const notesModel = new NotesModel();
    const notesClient = new NotesClient();
    const notesView = new NotesView(notesModel, notesClient);

    fetch.mockResponseOnce(
      JSON.stringify(["This is my new note", "This is another note"])
    );

    const notes = await notesView.displayNotesFromApi();
    // TODO: check html elements with queryselector instead
    // expect(notes).toEqual([ 'This is my new note', 'This is another note' ]);
    // expect(notes[0]).toEqual('This is my new note');
  });

  it("Append an error message to the main container", () => {
    const notesModel = new NotesModel();
    const notesClient = new NotesClient();
    const notesView = new NotesView(notesModel, notesClient);

    notesView.displayError();
    const errorEl = document.querySelector("#error-message");
    expect(errorEl).not.toBeNull();
    expect(errorEl.textContent).toBe("There has been an error!");
  });

  // Done with Michal with his code for NotesClient
  // it("loads notes from the server and displays them ",  (done) => {
  //   const notesModel = new NotesModel();
  //   const notesClient = new NotesClient();
  //   const notesView = new NotesView(notesModel, notesClient);

  //   notesClient.loadNotes = jest.fn((callback) => {
  //     callback(["first", "second"]);
  //   });
  //   notesView.displayNotesFromApi();
  //   const notes = document.querySelectorAll('div.note');
  //   expect(notes.length).toBe(2);
  //   expect(notes[0].textContent).toBe('first');
  //   expect(notesClient.loadNotes).toHaveBeenCalled();
  //   expect(notesModel.getNotes()).toEqual(["first", "second"]);
  //   done();
  // });
});
