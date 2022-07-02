namespace beachInteraction {
   
    export class Seagull extends Moveable {

        constructor(_position?: Vector) {
            super(_position); 
            if (_position)
            this.position = _position; 
            else
            this.velocity = Vector.getRandom(120, 100);
            this.position = Vector.getRandom(-200, 400);

        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.beginPath();
            crc2.moveTo(10, 10);
            crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
            crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
            crc2.lineWidth = 3; 
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.restore();
        }
    }

}
