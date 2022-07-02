"use strict";
var beachInteraction;
(function (beachInteraction) {
    class Cloud extends beachInteraction.Moveable {
        randomValueX;
        randomValueY;
        constructor(_position) {
            super(_position);
            this.position = new beachInteraction.Vector(50, 100);
            this.velocity = beachInteraction.Vector.getRandom(100, 200); //static -> greift durch die Klasse, deswegen Vector.getRandom  
        }
        draw() {
            let nParticles = 20;
            let radiusParicle = 30;
            let particle = new Path2D(); //neue individuelle Pfadobjekte
            let gradient = beachInteraction.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParicle);
            particle.arc(0, 0, radiusParicle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            beachInteraction.crc2.save();
            beachInteraction.crc2.translate(this.position.x, this.position.y);
            beachInteraction.crc2.fillStyle = gradient;
            for (let draw = 0; draw < nParticles; draw++) {
                beachInteraction.crc2.save();
                let x = (Math.random() - 0.5) * 100;
                let y = -(Math.random() * 50);
                beachInteraction.crc2.translate(x, y);
                beachInteraction.crc2.fill(particle);
                beachInteraction.crc2.restore();
            }
            beachInteraction.crc2.restore();
        }
    }
    beachInteraction.Cloud = Cloud;
})(beachInteraction || (beachInteraction = {}));
//# sourceMappingURL=cloud.js.map