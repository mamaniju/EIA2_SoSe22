"use strict";
var beachPolymorphie;
(function (beachPolymorphie) {
    class Cloud extends beachPolymorphie.Moveable {
        //size: number; 
        constructor(_position) {
            super(_position);
            this.position = new beachPolymorphie.Vector(50, 100);
            this.velocity = new beachPolymorphie.Vector(3, 0);
            this.velocity.random(100, 200);
        }
        draw() {
            let nParticles = 20;
            let radiusParicle = 30;
            let particle = new Path2D(); //neue individuelle Pfadobjekte
            let gradient = beachPolymorphie.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParicle);
            particle.arc(0, 0, radiusParicle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            beachPolymorphie.crc2.save();
            beachPolymorphie.crc2.translate(this.position.x, this.position.y);
            beachPolymorphie.crc2.fillStyle = gradient;
            for (let draw = 0; draw < nParticles; draw++) {
                beachPolymorphie.crc2.save();
                let x = (Math.random() - 0.5) * 100;
                let y = -(Math.random() * 50);
                beachPolymorphie.crc2.translate(x, y);
                beachPolymorphie.crc2.fill(particle);
                beachPolymorphie.crc2.restore();
            }
            beachPolymorphie.crc2.restore();
        }
    }
    beachPolymorphie.Cloud = Cloud;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=cloud.js.map