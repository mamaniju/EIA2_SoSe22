"use strict";
var beachPolymorphie;
(function (beachPolymorphie) {
    class Moveable {
        position;
        velocity;
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.position = new beachPolymorphie.Vector(0, 0);
            this.velocity = new beachPolymorphie.Vector(0, 0);
        }
        draw() {
            console.log("Moveable draw");
        }
        move(_timeslice) {
            console.log("Moveable move");
            let offSet = this.velocity.copy();
            offSet.scale(_timeslice);
            this.position.add(offSet);
            if (this.position.x < 0) {
                this.position.x += beachPolymorphie.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += beachPolymorphie.crc2.canvas.height;
            }
            if (this.position.x > beachPolymorphie.crc2.canvas.width) {
                this.position.x -= beachPolymorphie.crc2.canvas.width;
            }
            if (this.position.y > beachPolymorphie.crc2.canvas.height) {
                this.position.y -= beachPolymorphie.crc2.canvas.height;
            }
        }
    }
    beachPolymorphie.Moveable = Moveable;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=moveable.js.map