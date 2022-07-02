"use strict";
var beachInteraction;
(function (beachInteraction) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            //console.log("constructor"); 
            this.set(_x, _y);
        }
        static getRandom(_minLength, _maxLength) {
            let vector = new Vector(0, 0);
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            vector.set(Math.cos(direction), Math.sin(direction));
            vector.scale(length);
            return vector;
        }
        set(_x, _y) {
            //console.log("set"); 
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            //console.log("scale");
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            //console.log("add");  
            this.x += _addend.x;
            this.y += _addend.y;
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    beachInteraction.Vector = Vector;
})(beachInteraction || (beachInteraction = {}));
//# sourceMappingURL=vector.js.map