"use strict";
var strandClass;
(function (strandClass) {
    class Seagull {
        position;
        velocity;
        constructor() {
            this.position = new strandClass.Vector(0, 0);
            this.velocity = new strandClass.Vector(30, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            console.log("move Siegull");
            let offSet = new strandClass.Vector(this.velocity.x, this.velocity.y);
            offSet.scale(_timeslice);
            this.position.add(offSet);
            if (this.position.x < 0) {
                this.position.x += strandClass.crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += strandClass.crc2.canvas.height;
            }
            if (this.position.x > strandClass.crc2.canvas.width) {
                this.position.x -= strandClass.crc2.canvas.width;
            }
            if (this.position.y > strandClass.crc2.canvas.height) {
                this.position.y -= strandClass.crc2.canvas.height;
            }
        }
        draw() {
            strandClass.crc2.save();
            strandClass.crc2.translate(this.position.x, this.position.y);
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(10, 10);
            strandClass.crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
            strandClass.crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
            strandClass.crc2.strokeStyle = "#000000";
            strandClass.crc2.stroke();
            strandClass.crc2.restore();
        }
    }
    strandClass.Seagull = Seagull;
})(strandClass || (strandClass = {}));
//# sourceMappingURL=seagull.js.map