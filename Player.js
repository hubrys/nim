/**
 * Created by zachary on 2/22/15.
 */

function Player(name, computer) {
    this.isComputer = computer;
    this.name = name;

    this.getNextMove = function (currentSticks) {
        if (currentSticks == 1 || currentSticks == 2) {
            return 1;
        } else if (currentSticks == 3) {
            return 2;
        } else {
            return Math.floor(Math.random() * 3) + 1;
        }
    }
}
