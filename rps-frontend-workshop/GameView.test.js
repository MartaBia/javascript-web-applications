/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GameModel = require('./GameModel');
const GameView = require('./GameView');

describe('GameView', () => {
  it('displays 4 buttons', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    expect(document.querySelectorAll('button').length).toBe(4);
  });
  
  it('selects rock', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-rock');
    button.click();

    expect(document.querySelector('#current-move').textContent).toEqual('rock');
  });

  it('selects paper', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-paper');
    button.click();

    expect(document.querySelector('#current-move').textContent).toEqual('paper');
  });

  it('selects scissors', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-scissors');
    button.click();

    expect(document.querySelector('#current-move').textContent).toEqual('scissors');
  });

  // To complete after re-watching the recording
  xit('should return the result', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new GameModel();
    const view = new GameView(model);

    const button = document.querySelector('#choose-rock');
    button.click();

    const fakeMove = { getRandomMove: () =>  'paper', getResult: () => 'lose'};

  });
});