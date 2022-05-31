"use strict";
var strandClass;
(function (strandClass) {
    class Cloud {
        position;
        velocity;
        size;
        constructor(_size) {
            this.position = new strandClass.Vector(10, 100);
            this.velocity = new strandClass.Vector(0, 50);
            this.velocity.random(100, 200);
            this.size = _size;
        }
        move(_timeslice) {
            //console.log("move");
            let offSet = new strandClass.Vector(this.velocity.x, this.velocity.y);
            offSet.scale(_timeslice);
            this.position.add(offSet);
            this.position.x += this.velocity.x * +0.5;
            if (this.position.x < 0) {
                this.position.x += strandClass.crc2.canvas.width;
            }
            if (this.position.x > strandClass.crc2.canvas.width) {
                this.position.x -= strandClass.crc2.canvas.width;
            }
        }
        draw() {
            let nParticles = 20;
            let radiusParicle = 30;
            let particle = new Path2D(); //neue individuelle Pfadobjekte
            let gradient = strandClass.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParicle);
            particle.arc(0, 0, radiusParicle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            strandClass.crc2.save();
            strandClass.crc2.translate(this.position.x, this.position.y);
            strandClass.crc2.fillStyle = gradient;
            for (let draw = 0; draw < nParticles; draw++) {
                strandClass.crc2.save();
                let x = (Math.random() - 0.5) * 100;
                let y = -(Math.random() * 50);
                strandClass.crc2.translate(x, y);
                strandClass.crc2.fill(particle);
                strandClass.crc2.restore();
            }
            strandClass.crc2.restore();
        }
    }
    strandClass.Cloud = Cloud;
})(strandClass || (strandClass = {}));
//# sourceMappingURL=cloud.js.map