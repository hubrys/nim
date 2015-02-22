/**
 * Created by zachary on 2/22/15.
 */

function Round(ui, player1, player2) {
    this.isPlayerOneTurn = true;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer;
    this.ui = ui;
    this.currentSticks;

    this.reset = function() {
        this.currentSticks = 21;
        this.ui.hideWinnerUi();
        this.ui.setCurrentSticks(this.currentSticks);
        this.runTurn();
    };

    this.runTurn = function() {
        this.currentPlayer = this.isPlayerOneTurn ? this.player1 : this.player2;
        if (this.currentPlayer.isComputer) {
            var self = this;
            self.ui.showComputerUi(this.currentSticks);
            setTimeout(function() {
                var move = self.currentPlayer.getNextMove(self.currentSticks);
                self.setCurrentSticks(self.currentSticks - move);
            }, 0);
        } else {
            this.ui.showPlayerUi(this.currentSticks, this.currentPlayer.name);
        }
    };

    this.setCurrentSticks = function(sticks) {
        this.currentSticks = sticks;
        this.ui.setCurrentSticks(this.currentSticks);

            if (this.currentSticks == 1) {
            this.ui.showWinnerUi(this.isPlayerOneTurn ? this.player1.name : this.player2.name);
        } else {
            this.isPlayerOneTurn = !this.isPlayerOneTurn;
            var self = this;
            setTimeout(function() {
                self.runTurn();
            });
        }
    };

    this.takeSticks = function(sticks) {
        if (this.currentPlayer.isComputer == false) {
            this.setCurrentSticks(this.currentSticks - sticks);
        }
    };
}