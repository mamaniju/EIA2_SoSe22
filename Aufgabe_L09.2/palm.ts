namespace strandClass {

    export class Palm {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector(0, 0);
            this.velocity = new Vector(30, 0);
            this.velocity.random(120, 20);

        }
        move(_timeslice: number): void {
            console.log("move Palm");
            let offSet: Vector = new Vector(this.velocity.x, this.velocity.y);
            offSet.scale(_timeslice);
            this.position.add(offSet);

            if (this.position.x < 0) {
                this.position.x += crc2.canvas.width;
            }
            if (this.position.y < 0) {
                this.position.y += crc2.canvas.height;
            }
            if (this.position.x > crc2.canvas.width) {
                this.position.x -= crc2.canvas.width;
            }
            if (this.position.y > crc2.canvas.height) {
                this.position.y -= crc2.canvas.height;
            }
        }
        draw(): void {
            let gradientTrunK: CanvasGradient = crc2.createLinearGradient(0, 0, 200, 0);
            gradientTrunK.addColorStop(0, "HSLA(30, 50%, 40%)");
            gradientTrunK.addColorStop(1, "HSLA(30, 90%, 100%)");
            //let nPalm: number = 3;
            crc2.save();
            crc2.translate(650, 300);
            crc2.beginPath();
            crc2.fillStyle = gradientTrunK;
            crc2.fillRect(10, 10, 25, 200);
            crc2.stroke();
            crc2.restore();
            //for (let draw: number = 0; draw < nPalm; draw++) {
            let gradientLeaves: CanvasGradient = crc2.createLinearGradient(0, 0, 200, 0);
            gradientLeaves.addColorStop(0, "HSLA(120, 20%, 50%)");
            //gradientLeaves.addColorStop(1, "HSLA(120, 25%, 20%)");
            let x: number = 10;
            let y: number = 10;
            crc2.save();
            crc2.translate(660, 300);
            crc2.beginPath();
            crc2.fillStyle = gradientLeaves;
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(20, -100, 300, 200, x, y);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(-20, -100, -300, 200, x, y);
            crc2.fill();
            //}
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(20, -100, 300, 50, x, y);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(-20, -100, -300, 50, x, y);
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(-40, -100, 300, -100, x, y);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(x, y);
            crc2.bezierCurveTo(40, -100, -300, -100, x, y);
            crc2.fill();
            crc2.restore();
        }
    }
}

