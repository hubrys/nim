/**
 * Created by zachary on 2/22/15.
 */

function Ui() {
    this.sticks = document.getElementById("sticks");
    this.one_stick = document.getElementById("one_stick");
    this.two_stick = document.getElementById("two_stick");
    this.three_stick = document.getElementById("three_stick");

    this.mainUi = document.getElementById("main_ui");
    this.roundUi = document.getElementById("round_ui");

    this.playerUi = document.getElementById("player_ui");
    this.playerMessage = document.getElementById("player_message");
    this.computerUi = document.getElementById("computer_ui");
    this.winnerUi = document.getElementById("winner_ui");
    this.winnerMessage = document.getElementById("winner_message");

    document.getElementById("reset")

    this.showMainUi = function() {
        this.mainUi.style.display = "block";
        this.roundUi.style.display = "none";
    };

    this.showRoundUi = function() {
        this.mainUi.style.display = "none";
        this.roundUi.style.display = "block";
    };

    this.showPlayerUi = function (currentSticks, name) {
        console.log("showing player ui for sticks " + currentSticks);
        this.computerUi.style.display = "none";
        this.playerUi.style.display = "block";
        this.playerMessage.innerHTML = name + ", it's your turn:";

    };

    this.showComputerUi = function (currentSticks) {
        console.log("showing computer ui for sticks " + currentSticks);
        this.computerUi.style.display = "block";
        this.playerUi.style.display = "none";
    };

    this.setCurrentSticks = function (sticks) {
        this.sticks.innerHTML = sticks;
    };

    this.showWinnerUi = function (name) {
        console.log(name + ' is the winner');
        this.winnerMessage.innerHTML = name + " is the winner";
        this.playerUi.style.display = "none";
        this.computerUi.style.display = "none";
        this.winnerUi.style.display = "block";
    };

    this.hideWinnerUi = function () {
        console.log("hiding winner ui");
        this.winnerUi.style.display = "none";
    }
}

function InitializeInputHandlers(cb) {
    document.getElementById("one_stick").onclick = function () {
        cb.takeSticks(1);
    };

    document.getElementById("two_stick").onclick = function () {
        cb.takeSticks(2);
    };

    document.getElementById("three_stick").onclick = function () {
        cb.takeSticks(3);
    };

    document.getElementById("main").onclick = function() {
        cb.main();
    };

    document.getElementById("reset").onclick = function () {
        cb.reset();
    };

    document.getElementById("one_player").onclick = function() {
        cb.players(1);
    };

    document.getElementById("two_player").onclick = function() {
        cb.players(2);
    };

}