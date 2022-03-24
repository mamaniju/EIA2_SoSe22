"use strict";
var randomPoem;
(function (randomPoem) {
    let subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);
    for (let i = subjekte.length; i >= 1; i--) {
        //console.log(i);
        let arrayFunction = getVerse([], [], []);
        console.log(arrayFunction);
    }
    function getVerse(_subjekte, _praedikate, _objekte) {
        //let x: string = "Alohomora";
        let vers = "";
        let subjekteRandom = Math.floor(Math.random() * subjekte.length);
        vers += subjekte.splice(subjekteRandom, 1)[0] + " "; //Mit splice() aquí, debo cortar una palabra de mi Array subjekte de arriba, para que ésta se incerte en la variable vacia vers. 
        //addition += / Array splice(...)   / index in 0 position [0]
        //console.log(subjekteRandom);
        let praedikateRandom = Math.floor(Math.random() * praedikate.length);
        vers += praedikate.splice(praedikateRandom, 1)[0] + " ";
        //console.log(praedikateRandom);
        let objekteRandom = Math.floor(Math.random() * objekte.length);
        vers += objekte.splice(objekteRandom, 1)[0] + " ";
        //console.log(objekteRandom);
        return (vers);
    }
})(randomPoem || (randomPoem = {}));
//# sourceMappingURL=L01.1_script.js.map