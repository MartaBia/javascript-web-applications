const NotesClient = require('./notesClient');
const notesClient = new NotesClient();

require('jest-fetch-mock').enableMocks();

describe('NotesClient', () => {
  it('fetches the notes data', async () => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify(
      [ 'This note is coming from the server' ]
    ));

    const notes = await client.loadNotes();
    expect(notes).toEqual([ 'This note is coming from the server' ])
  });
});
  // Done with Michal: 
  // it("fetches and loads data", () => {
  //   fetch.mockResponseOnce(
  //     JSON.stringify({
  //       notes: ["buy milk", "go to the gym"],
  //     })
  //   );
  //   notesClient.loadNotes((data) => {
  //     expect(data.notes).toStrictEqual(["buy milk", "go to the gym"]);
  //   });
  // });

  // it("creates a new note with POST route", (done) => {
  //   fetch.mockResponseOnce(
  //     JSON.stringify({
  //       notes: ["buy milk", "go to the gym"],
  //     })
  //   );
  //   const note = {data: 'a test note',};
  //   notesClient.createNote(note);

  //   expect(fetch).toHaveBeenCalledWith('http://localhost:3000/notes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({data: note})
  //   })
  //   done();
  // });
// });
