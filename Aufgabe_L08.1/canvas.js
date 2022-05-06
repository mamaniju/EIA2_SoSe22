"use strict";
var Canvas_GenerativeKunst;
(function (Canvas_GenerativeKunst) {
    let crc2;
    //HSL - Farbe 
    let hsl1;
    let hsl2;
    let hsl3;
    window.addEventListener("load", generativeKunst);
    function generativeKunst() {
        let canvas = document.querySelector("canvas");
        //RenderingContext
        crc2 = canvas.getContext("2d");
        //Gradient 
        gradientColor();
        //for drawTriangle
        for (let i = 0; i < 40; i++) {
            drawTriangle();
        }
        //for drawLinie and drawCircle 
        for (let i = 0; i < 20; i++) {
            let x = Math.floor(Math.random() * 900); //Wegen meiner Breite
            let y = Math.floor(Math.random() * 600); //Wegen meiner Höher 
            //console.log(i);
            //console.log(x);
            //console.log(y); 
            let color = "hsl(" + hsl1 + "," + "100%" + "," + "60%" + ")"; //Farbe für die Linie und Kreis
            drawLinie(x, y, color);
            drawCircle(x, y, color);
        }
    }
    function gradientColor() {
        let gradient = crc2.createLinearGradient(0, 100, 200, 0);
        hsl1 = Math.floor(Math.random() * 500); //Zufälligezahl - Farbe
        hsl2 = Math.floor(Math.random() * 400);
        hsl3 = Math.floor(Math.random() * 100);
        gradient.addColorStop(0, "hsl(" + hsl1 + "," + "50%" + "," + "80%" + ")"); //Farbe, Saturation, Helligkeit
        gradient.addColorStop(.5, "hsl(" + hsl2 + "," + "50%" + "," + "80%" + ")");
        gradient.addColorStop(1, "hsl(" + hsl3 + "," + "0%" + "," + "80%" + ")");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 600);
    }
    //Linie 
    function drawLinie(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, 0);
        crc2.lineTo(_x, _y);
        crc2.strokeStyle = _color; //verwendet die LinieFarbe
        crc2.stroke(); //ohne strocke, verschwinde der Kreis. Man verwendet strocke() um den Pfad tatsächlich auf der Leinwand zu zeichnen.
        crc2.lineWidth = 3; //Liniegroß
    }
    //Kreis
    function drawCircle(_x, _y, _color) {
        let r = Math.floor(Math.random() * 40); //Kreisgroß-Zufälligezahl
        crc2.beginPath();
        crc2.fillStyle = _color;
        crc2.arc(_x, _y, r, 0, 2 * Math.PI); //(x, y, r, sAngle, eAngle)
        crc2.fill();
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(_x, _y, 10, 0, 2 * Math.PI);
        crc2.fill();
    }
    //Dreieck
    function drawTriangle() {
        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 500);
        crc2.beginPath();
        crc2.fillStyle = "#ffffff";
        crc2.moveTo(x, y);
        crc2.lineTo(x, y + 10);
        crc2.lineTo(x + 10, y + 5);
        crc2.closePath();
        crc2.fill();
    }
})(Canvas_GenerativeKunst || (Canvas_GenerativeKunst = {}));
//# sourceMappingURL=canvas.js.map