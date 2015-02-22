/**
 * Created by zachary on 2/22/15.
 */

function Nim() {
    this.currentRound = null;

    this.start = function () {
        this.ui = new Ui();
        this.currentRound = new Round(this.ui,
            new Player('Zachary', false),
            new Player('Computer', true));

        var self = this;
        InitializeInputHandlers({
            takeSticks: function (sticks) {
                self.currentRound.takeSticks(sticks);
            },
            reset: function () {
                self.ui.hideWinnerUi();
                self.currentRound.reset();
            },
            players: function (playerCount) {
                var secondPlayer;
                if (playerCount == 1) {
                    secondPlayer = new Player("Computer", true);
                } else {
                    secondPlayer = new Player("Player 2", false);
                }
                self.currentRound = new Round(self.ui,
                    new Player("Player 1", false),
                    secondPlayer);
                self.ui.showRoundUi();
                self.currentRound.reset();
            },
            main: function() {
                self.ui.showMainUi();
            }
        });

        this.ui.showMainUi();
    }
}