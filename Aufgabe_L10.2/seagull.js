"use strict";
var beachPolymorphie;
(function (beachPolymorphie) {
    class Seagull extends beachPolymorphie.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.position = new beachPolymorphie.Vector(200, 400);
            this.velocity = new beachPolymorphie.Vector(120, 100);
            this.velocity.random(120, 100);
            this.position.random(-200, 400);
        }
        draw() {
            beachPolymorphie.crc2.save();
            beachPolymorphie.crc2.translate(this.position.x, this.position.y);
            beachPolymorphie.crc2.beginPath();
            beachPolymorphie.crc2.moveTo(10, 10);
            beachPolymorphie.crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
            beachPolymorphie.crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
            beachPolymorphie.crc2.lineWidth = 3;
            beachPolymorphie.crc2.strokeStyle = "#000000";
            beachPolymorphie.crc2.stroke();
            beachPolymorphie.crc2.restore();
        }
    }
    beachPolymorphie.Seagull = Seagull;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=seagull.js.map