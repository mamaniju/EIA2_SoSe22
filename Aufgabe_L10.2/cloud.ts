namespace beachPolymorphie {

    export class Cloud extends Moveable {
        //size: number; 
    
        constructor(_position?: Vector) {
            super(_position); 
            this.position = new Vector (50, 100);
            this.velocity = new Vector (3,  0); 
            this.velocity.random(100, 200); 
           
        }
        draw(): void {
            let nParticles: number = 20;
            let radiusParicle: number = 30;
            let particle: Path2D = new Path2D(); //neue individuelle Pfadobjekte
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParicle);

            particle.arc(0, 0, radiusParicle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let draw: number = 0; draw < nParticles; draw++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * 100;
                let y: number = - (Math.random() * 50);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }
    }
}