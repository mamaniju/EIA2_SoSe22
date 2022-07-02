"use strict";
var beachInteraction;
(function (beachInteraction) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.position = new beachInteraction.Vector(0, 0);
            this.velocity = new beachInteraction.Vector(0, 0);
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offSet = this.velocity.copy();
            offSet.scale(_timeslice);
            this.position.add(offSet);
            if (this.position.x < 0) {
                this.position.x += beachInteraction.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += beachInteraction.crc2.canvas.height;
            }
            if (this.position.x > beachInteraction.crc2.canvas.width) {
                this.position.x -= beachInteraction.crc2.canvas.width;
            }
            if (this.position.y > beachInteraction.crc2.canvas.height) {
                this.position.y -= beachInteraction.crc2.canvas.height;
            }
        }
    }
    beachInteraction.Moveable = Moveable;
})(beachInteraction || (beachInteraction = {}));
//# sourceMappingURL=moveable.js.map