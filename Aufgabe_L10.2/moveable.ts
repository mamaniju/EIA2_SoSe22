namespace beachPolymorphie {

    export class Moveable {
        position: Vector;
        velocity: Vector;

        constructor(_position?: Vector ) {
            if (_position)
            this.position = _position.copy(); 
            this.position = new Vector (0, 0); 
            this.velocity = new Vector (0, 0); 
        }

        draw(): void {
            console.log("Moveable draw");
        }

        move(_timeslice: number): void {
            console.log("Moveable move"); 
            let offSet: Vector = this.velocity.copy();
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
    }


}