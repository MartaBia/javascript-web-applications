class GameView {
    constructor(model) {
        this.model = model;

        this.rockButton = document.querySelector('#choose-rock');
        this.paperButton = document.querySelector('#choose-paper');
        this.scissorsButton = document.querySelector('#choose-scissors');

        this.rockButton.addEventListener('click', () => {
            this.model.selectMove('rock');

            document.querySelector("#current-move").textContent = 'rock';
        
            
            console.log('Rock selected');
        });

        this.paperButton.addEventListener('click', () => {
            this.model.selectMove('paper');

            document.querySelector("#current-move").textContent = 'paper';
        
            
            console.log('Paper selected');
        });

        this.scissorsButton.addEventListener('click', () => {
            this.model.selectMove('scissors');

            document.querySelector("#current-move").textContent = 'scissors';
        
            
            console.log('Scissors selected');
        });
    }
}

module.exports = GameView;