"use strict";
var strandClass;
(function (strandClass) {
    class Palm {
        position;
        velocity;
        constructor() {
            this.position = new strandClass.Vector(0, 0);
            this.velocity = new strandClass.Vector(30, 0);
            this.velocity.random(120, 20);
        }
        move(_timeslice) {
            console.log("move Palm");
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
            let gradientTrunK = strandClass.crc2.createLinearGradient(0, 0, 200, 0);
            gradientTrunK.addColorStop(0, "HSLA(30, 50%, 40%)");
            gradientTrunK.addColorStop(1, "HSLA(30, 90%, 100%)");
            //let nPalm: number = 3;
            strandClass.crc2.save();
            strandClass.crc2.translate(650, 300);
            strandClass.crc2.beginPath();
            strandClass.crc2.fillStyle = gradientTrunK;
            strandClass.crc2.fillRect(10, 10, 25, 200);
            strandClass.crc2.stroke();
            strandClass.crc2.restore();
            //for (let draw: number = 0; draw < nPalm; draw++) {
            let gradientLeaves = strandClass.crc2.createLinearGradient(0, 0, 200, 0);
            gradientLeaves.addColorStop(0, "HSLA(120, 20%, 50%)");
            //gradientLeaves.addColorStop(1, "HSLA(120, 25%, 20%)");
            let x = 10;
            let y = 10;
            strandClass.crc2.save();
            strandClass.crc2.translate(660, 300);
            strandClass.crc2.beginPath();
            strandClass.crc2.fillStyle = gradientLeaves;
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(20, -100, 300, 200, x, y);
            strandClass.crc2.fill();
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(-20, -100, -300, 200, x, y);
            strandClass.crc2.fill();
            //}
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(20, -100, 300, 50, x, y);
            strandClass.crc2.fill();
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(-20, -100, -300, 50, x, y);
            strandClass.crc2.fill();
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(-40, -100, 300, -100, x, y);
            strandClass.crc2.fill();
            strandClass.crc2.beginPath();
            strandClass.crc2.moveTo(x, y);
            strandClass.crc2.bezierCurveTo(40, -100, -300, -100, x, y);
            strandClass.crc2.fill();
            strandClass.crc2.restore();
        }
    }
    strandClass.Palm = Palm;
})(strandClass || (strandClass = {}));
//# sourceMappingURL=palm.js.map