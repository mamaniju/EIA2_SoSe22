namespace strandClass {

    export class Seagull {
        position: Vector;
        velocity: Vector;

        constructor() {
            this.position = new Vector(0, 0);
            this.velocity = new Vector(30, 0);
            this.velocity.random(120, 20);

        }
        move(_timeslice: number): void {
            console.log("move Siegull");
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
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
            crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.restore();
        }
    }

}