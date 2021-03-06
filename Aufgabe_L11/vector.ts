namespace beachInteraction {

    export class Vector {
       public x: number;
       public y: number;

        constructor(_x: number, _y: number) {
            //console.log("constructor"); 
            this.set(_x, _y);
        }
        public static getRandom(_minLength: number, _maxLength: number): Vector {                 //static muss immer vorne definiert
            let vector: Vector = new Vector( 0 , 0); 
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;
            
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector; 
        }
        public set(_x: number, _y: number): void {
            //console.log("set"); 
            this.x = _x;
            this.y = _y;
        }
        public scale(_factor: number): void {
            //console.log("scale");
            this.x *= _factor;
            this.y *= _factor;
        }
        public add(_addend: Vector): void {
            //console.log("add");  
            this.x += _addend.x;
            this.y += _addend.y;
        }
     
        public copy(): Vector {
            return new Vector (this.x, this.y); 
        }

    }

}