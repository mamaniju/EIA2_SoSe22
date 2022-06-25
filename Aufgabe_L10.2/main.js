"use strict";
var beachPolymorphie;
(function (beachPolymorphie) {
    let imgData;
    let moveable = [];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        beachPolymorphie.crc2 = canvas.getContext("2d");
        background();
        sun();
        people();
        palm();
        createSeagull(10);
        imgData = beachPolymorphie.crc2.getImageData(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
        createClou(3);
        window.setInterval(uptade, 300);
    }
    //Cloud
    function createClou(_nCloud) {
        //console.log("create Cloud");
        for (let i = 0; i < _nCloud; i++)
            ;
        let cloud = new beachPolymorphie.Cloud();
        moveable.push(cloud);
    }
    //Seagull
    function createSeagull(_nSeagull) {
        //console.log("create Seagull");
        for (let i = 0; i < _nSeagull; i++)
            ;
        {
            let seagull = new beachPolymorphie.Seagull();
            moveable.push(seagull);
        }
    }
    function uptade() {
        //console.log("UpdateCloud");
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        beachPolymorphie.crc2.putImageData(imgData, 0, 0);
        for (let motion of moveable) {
            motion.move(1 / 50);
            motion.draw();
        }
    }
    //draw static elements
    //Background 
    function background() {
        //console.log("Background");
        let gradient = beachPolymorphie.crc2.createLinearGradient(0, 0, 0, beachPolymorphie.crc2.canvas.height);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(0, "#1874CD");
        gradient.addColorStop(0.30, "white");
        gradient.addColorStop(0.40, "#33ccff");
        gradient.addColorStop(0.70, "#ffb366");
        beachPolymorphie.crc2.fillStyle = gradient;
        beachPolymorphie.crc2.fillRect(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
        imgData = beachPolymorphie.crc2.getImageData(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
    }
    //Sun
    function sun() {
        //console.log("Sun", _position);
        let r1 = 30;
        let r2 = 45;
        //Gradient-Farbe
        let gradient = beachPolymorphie.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(12, 100%, 50%, 0)");
        beachPolymorphie.crc2.save();
        beachPolymorphie.crc2.translate(450, 80);
        beachPolymorphie.crc2.fillStyle = gradient;
        beachPolymorphie.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.restore();
        imgData = beachPolymorphie.crc2.getImageData(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
    }
    //People
    function people() {
        let x = 0;
        let y = 0;
        beachPolymorphie.crc2.save();
        beachPolymorphie.crc2.translate(250, 450);
        //Kopf
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.arc(x, y, 20, 0, 2 * Math.PI);
        beachPolymorphie.crc2.fillStyle = "#404040";
        beachPolymorphie.crc2.fill();
        //Nacken
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.fillRect(x - 5, y, 10, 30);
        //Körper
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.fillRect(-20, 25, 40, 40);
        //Po
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.arc(x - 10, y + 60, 15, 0, 2 * Math.PI);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.arc(x + 10, y + 60, 15, 0, 2 * Math.PI);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.restore();
        imgData = beachPolymorphie.crc2.getImageData(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
    }
    //Palmen 
    function palm() {
        let gradientTrunK = beachPolymorphie.crc2.createLinearGradient(0, 0, 200, 0);
        gradientTrunK.addColorStop(0, "HSLA(30, 50%, 40%)");
        gradientTrunK.addColorStop(1, "HSLA(30, 90%, 100%)");
        //let nPalm: number = 3;
        beachPolymorphie.crc2.save();
        beachPolymorphie.crc2.translate(650, 300);
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.fillStyle = gradientTrunK;
        beachPolymorphie.crc2.fillRect(10, 10, 25, 200);
        beachPolymorphie.crc2.stroke();
        beachPolymorphie.crc2.restore();
        //for (let draw: number = 0; draw < nPalm; draw++) {
        let gradientLeaves = beachPolymorphie.crc2.createLinearGradient(0, 0, 200, 0);
        gradientLeaves.addColorStop(0, "HSLA(120, 20%, 50%)");
        //gradientLeaves.addColorStop(1, "HSLA(120, 25%, 20%)");
        let x = 10;
        let y = 10;
        beachPolymorphie.crc2.save();
        beachPolymorphie.crc2.translate(660, 300);
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.fillStyle = gradientLeaves;
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(20, -100, 300, 200, x, y);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(-20, -100, -300, 200, x, y);
        beachPolymorphie.crc2.fill();
        //}
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(20, -100, 300, 50, x, y);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(-20, -100, -300, 50, x, y);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(-40, -100, 300, -100, x, y);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.beginPath();
        beachPolymorphie.crc2.moveTo(x, y);
        beachPolymorphie.crc2.bezierCurveTo(40, -100, -300, -100, x, y);
        beachPolymorphie.crc2.fill();
        beachPolymorphie.crc2.restore();
        imgData = beachPolymorphie.crc2.getImageData(0, 0, beachPolymorphie.crc2.canvas.width, beachPolymorphie.crc2.canvas.height);
    }
})(beachPolymorphie || (beachPolymorphie = {}));
//# sourceMappingURL=main.js.map