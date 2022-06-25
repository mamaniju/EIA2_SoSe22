"use strict";
var beachPolymorphie;
(function (beachPolymorphie) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            //console.log("constructor"); 
            this.set(_x, _y);
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
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
        copy() {
            return new Vector(this.x, this.y);
        }
    }
    beachPolymorphie.Vector = Vector;
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=vector.js.map