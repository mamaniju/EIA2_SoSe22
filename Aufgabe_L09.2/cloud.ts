namespace strandClass {

    export class Cloud {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number) {
            this.position = new Vector(10, 100);
            this.velocity = new Vector(0, 50);
            this.velocity.random(100, 200);
            this.size = _size;           
        }
        move(_timeslice: number): void {
            //console.log("move");
            let offSet: Vector = new Vector(this.velocity.x, this.velocity.y);
            offSet.scale(_timeslice);
            this.position.add(offSet);
            this.position.x += this.velocity.x * +0.5; 

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }             
    
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