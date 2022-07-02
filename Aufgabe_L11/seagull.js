"use strict";
var beachInteraction;
(function (beachInteraction) {
    class Seagull extends beachInteraction.Moveable {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position;
            else
                this.velocity = beachInteraction.Vector.getRandom(120, 100);
            this.position = beachInteraction.Vector.getRandom(-200, 400);
        }
        draw() {
            beachInteraction.crc2.save();
            beachInteraction.crc2.translate(this.position.x, this.position.y);
            beachInteraction.crc2.beginPath();
            beachInteraction.crc2.moveTo(10, 10);
            beachInteraction.crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
            beachInteraction.crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
            beachInteraction.crc2.lineWidth = 3;
            beachInteraction.crc2.strokeStyle = "#000000";
            beachInteraction.crc2.stroke();
            beachInteraction.crc2.restore();
        }
    }
    beachInteraction.Seagull = Seagull;
})(beachInteraction || (beachInteraction = {}));
//# sourceMappingURL=seagull.js.map