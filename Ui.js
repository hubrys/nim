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

    this.stickySticks = [];
    for (var i = 1; i <= 21; i++) {
        this.stickySticks.push(i);
    }

    this.showMainUi = function () {
        this.mainUi.style.display = "flex";
        this.roundUi.style.display = "none";
        this.hideWinnerUi();
    };

    this.showRoundUi = function () {
        this.mainUi.style.display = "none";
        this.roundUi.style.display = "flex";
        this.hideWinnerUi();
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
        var diff = this.stickySticks.length - sticks;
        if (diff < 0) {
            diff = -diff;
            var length = this.stickySticks.length;
            for (var i = 0; i < diff; i++) {
                this.stickySticks.push(length + i + 1);
            }
        } else {
            this.stickySticks.splice(sticks, 100);
        }
        console.log("currentSticks: %d, length: %d", sticks, this.stickySticks.length);

        var stick = d3.select("#sticks")
            .selectAll("div")
            .data(this.stickySticks);

        stick
            .enter()
            .append("div")
            //.style("height", "0rem")
            .style("transform", "scale(1, 0")
            .text(function (d) {
                return d;
            })
            .transition()
            .duration(500)
            .delay(function (d, i) {
                return i * 20;
            })
            .style("transform", "scale(1, 1)");

        stick
            .exit()
            .transition()
            //.style("height", "0rem")
            .duration(500)
            .style("background", "white")
            //.style("background", "orange")
            .remove();
    };

    this.showWinnerUi = function (name) {
        console.log(name + ' is the winner');
        this.winnerMessage.innerHTML = name + " is the winner";
        this.roundUi.style.display = "none";
        this.winnerUi.style.display = "flex";
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

    document.getElementById("main").onclick = function () {
        cb.main();
    };

    document.getElementById("reset").onclick = function () {
        cb.reset();
    };

    document.getElementById("one_player").onclick = function () {
        cb.players(1);
    };

    document.getElementById("two_player").onclick = function () {
        cb.players(2);
    };

}