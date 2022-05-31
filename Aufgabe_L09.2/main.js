"use strict";
var strandClass;
(function (strandClass) {
    let cloudArray = [];
    let seagullArray = [];
    let palmArray = [];
    let imgData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        strandClass.crc2 = canvas.getContext("2d");
        imgData = strandClass.crc2.getImageData(0, 0, strandClass.crc2.canvas.width, strandClass.crc2.canvas.height);
        background();
        sun();
        people();
        createClou(1);
        createClou(1);
        createClou(0);
        createSeagull(6);
        createPalm(2);
        window.setInterval(uptade, 700);
    }
    //Background 
    function background() {
        //console.log("Background");
        let gradient = strandClass.crc2.createLinearGradient(0, 0, 0, strandClass.crc2.canvas.height);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(0, "#1874CD");
        gradient.addColorStop(0.30, "white");
        gradient.addColorStop(0.40, "#33ccff");
        gradient.addColorStop(0.70, "#ffb366");
        strandClass.crc2.fillStyle = gradient;
        strandClass.crc2.fillRect(0, 0, strandClass.crc2.canvas.width, strandClass.crc2.canvas.height);
        imgData = strandClass.crc2.getImageData(0, 0, strandClass.crc2.canvas.width, strandClass.crc2.canvas.height);
    }
    //Sun
    function sun() {
        //console.log("Sun", _position);
        let r1 = 30;
        let r2 = 45;
        //Gradient-Farbe
        let gradient = strandClass.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(12, 100%, 50%, 0)");
        strandClass.crc2.save();
        strandClass.crc2.translate(450, 80);
        strandClass.crc2.fillStyle = gradient;
        strandClass.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        strandClass.crc2.fill();
        strandClass.crc2.restore();
        imgData = strandClass.crc2.getImageData(0, 0, strandClass.crc2.canvas.width, strandClass.crc2.canvas.height);
    }
    //People
    function people() {
        let x = 0;
        let y = 0;
        strandClass.crc2.save();
        strandClass.crc2.translate(250, 450);
        //Kopf
        strandClass.crc2.beginPath();
        strandClass.crc2.arc(x, y, 20, 0, 2 * Math.PI);
        strandClass.crc2.fillStyle = "#404040";
        strandClass.crc2.fill();
        //Nacken
        strandClass.crc2.beginPath();
        strandClass.crc2.fillRect(x - 5, y, 10, 30);
        //Körper
        strandClass.crc2.beginPath();
        strandClass.crc2.fillRect(-20, 25, 40, 40);
        //Po
        strandClass.crc2.beginPath();
        strandClass.crc2.arc(x - 10, y + 60, 15, 0, 2 * Math.PI);
        strandClass.crc2.fill();
        strandClass.crc2.beginPath();
        strandClass.crc2.arc(x + 10, y + 60, 15, 0, 2 * Math.PI);
        strandClass.crc2.fill();
        strandClass.crc2.restore();
        imgData = strandClass.crc2.getImageData(0, 0, strandClass.crc2.canvas.width, strandClass.crc2.canvas.height);
    }
    //Cloud
    function createClou(_nCloud) {
        console.log("create Cloud");
        for (let i = 0; i < _nCloud; i++)
            ;
        let cloud = new strandClass.Cloud(1);
        cloudArray.push(cloud);
    }
    //Seagull
    function createSeagull(_nSeagull) {
        console.log("create Seagull");
        for (let i = 0; i < _nSeagull; i++) {
            let seagull = new strandClass.Seagull();
            seagullArray.push(seagull);
        }
    }
    //Palmen
    function createPalm(_nPalmen) {
        console.log("create Palmen");
        for (let i = 0; i < _nPalmen; i++)
            ;
        let palm = new strandClass.Palm();
        palmArray.push(palm);
    }
    function uptade() {
        console.log("UpdateCloud");
        strandClass.crc2.putImageData(imgData, 0, 0);
        for (let cloud of cloudArray) {
            cloud.move(1 / 50);
            cloud.draw();
        }
        for (let seagull of seagullArray) {
            seagull.move(1.5);
            seagull.draw();
        }
        for (let palm of palmArray) {
            palm.move(1 / 50);
            palm.draw();
        }
    }
})(strandClass || (strandClass = {}));
//# sourceMappingURL=main.js.map