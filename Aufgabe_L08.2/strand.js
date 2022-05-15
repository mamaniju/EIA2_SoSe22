"use strict";
var canvasStrand;
(function (canvasStrand) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.30;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        //RenderingContext 
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawSun({ x: 450, y: 80 });
        drawCloud({ x: 700, y: 90 }, { x: 100, y: 50 });
        drawCloud({ x: 50, y: 50 }, { x: 150, y: 70 });
        drawCloud({ x: 250, y: 120 }, { x: 80, y: 50 });
        drawPalm({ x: 580, y: 300 });
        drawPalm({ x: 850, y: 400 });
        drawPeople({ x: 150, y: 450 });
        drawPeople({ x: 220, y: 450 });
        drawSeagull({ x: 80, y: 80 });
        drawSeagull({ x: 250, y: 120 });
        drawSeagull({ x: 600, y: 70 });
    }
    //Hintergrund 
    function drawBackground() {
        //console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(0, "#1874CD");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(0.40, "#33ccff");
        gradient.addColorStop(0.70, "#ffb366");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Sonne
    function drawSun(_position) {
        //console.log("Sun", _position);
        let r1 = 30;
        let r2 = 45;
        //Gradient-Farbe
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(12, 100%, 50%, 0)");
        crc2.save(); //Transformation-speichern
        crc2.translate(_position.x, _position.y); //Transformation (mueve el origen del Lienzo) 
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI); //arc(x, y, r, sAngle, eAngle)
        crc2.fill();
        crc2.restore(); //Transformation-wieder herstellen
    }
    //Wolken
    function drawCloud(_position, _size) {
        //console.log("Cloud", _position, _size);
        let nParticles = 20;
        let radiusParicle = 30;
        let particle = new Path2D(); //neue individuelle Pfadobjekte
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParicle);
        particle.arc(0, 0, radiusParicle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let draw = 0; draw < nParticles; draw++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    //Palmen 
    function drawPalm(_position) {
        let gradientTrunK = crc2.createLinearGradient(0, 0, 200, 0);
        gradientTrunK.addColorStop(0, "HSLA(30, 50%, 40%)");
        gradientTrunK.addColorStop(1, "HSLA(30, 90%, 100%)");
        //let nPalm: number = 3;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.fillStyle = gradientTrunK;
        crc2.fillRect(10, 10, 25, 200);
        crc2.stroke();
        crc2.restore();
        //for (let draw: number = 0; draw < nPalm; draw++) {
        let gradientLeaves = crc2.createLinearGradient(0, 0, 200, 0);
        gradientLeaves.addColorStop(0, "HSLA(120, 20%, 50%)");
        //gradientLeaves.addColorStop(1, "HSLA(120, 25%, 20%)");
        let x = 10;
        let y = 10;
        crc2.save();
        crc2.translate(_position.x + 10, _position.y);
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
    //Menschen
    function drawPeople(_position) {
        let x = 0;
        let y = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        //Kopf
        crc2.beginPath();
        crc2.arc(x, y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#404040";
        crc2.fill();
        //Nacken
        crc2.beginPath();
        crc2.fillRect(x - 5, y, 10, 30);
        //Körper
        crc2.beginPath();
        crc2.fillRect(-20, 25, 40, 40);
        //Po
        crc2.beginPath();
        crc2.arc(x - 10, y + 60, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 10, y + 60, 15, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    //Möve
    function drawSeagull(_position) {
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(10, 10);
        crc2.bezierCurveTo(5, 10, 20, -5, 20, 10);
        crc2.bezierCurveTo(20, 10, 40, -5, 50, 10);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.restore();
    }
})(canvasStrand || (canvasStrand = {}));
//# sourceMappingURL=strand.js.map