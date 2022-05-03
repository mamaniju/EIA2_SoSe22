"use strict";
var memorySettings;
(function (memorySettings) {
    let arrayCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let divAllForm = document.getElementById("allForm");
        divAllForm.addEventListener("change", handleChange); //change lädt das ganze Formular hoch 
        let startButton = document.querySelector("#startButton");
        startButton.addEventListener("click", createCards); //click in Start und wird die createCards function aufgerufen 
        document.addEventListener("click", gameMemory);
    }
    function handleChange() {
        createCards();
    }
    // Erstellt die Karten
    function createCards() {
        //Entfert das Formular - Add Spielkarten hinzu 
        let playStart = document.getElementById("playStart");
        playStart.innerHTML = ""; //DOM -> hidden (oculto), weil das Spiel noch nicht gestartet ist. 
        let allFormHidden = document.getElementById("allForm");
        allFormHidden.classList.add("hidden"); //add eine Klasse und versteckt (hidden/oculto) die ganze Div-Container allForm
        playStart.classList.remove("hidden"); //entfernt hidden und macht das Div-Container playStart sichtbar 
        //Data Formular//
        let formData = new FormData(document.forms[0]); // FormData ist ein einfacher Mechanismus, um das Formularelemente automatisch auszuwerten. 
        let fieldSize = parseInt(formData.get("pair") + ""); //Number of pair -> die Anzahlpaar der Karte wird der Nutzer hergestellt. 
        //let cardSize: string = formData.get("cardSize") + "px"; 
        //let backgroundColor: string = formData.get("backgroundColor") + ""; 
        //let cardbackColor: string = formData.get("cardbackColor") + ""; 
        //let fontColor: string = formData.get()
        let gameCards = [];
        for (let entry of formData) {
            gameCards.push(String(entry[1]));
            console.log(gameCards);
        }
        arrayCards = arrayCards.sort(() => Math.random() - 0.5); //sort (Alfabetisch aufgeräumt) Math.random (Zufällige Zahl)
        //console.log(arrayCards);
        for (let i = 0; i < fieldSize; i++) {
            gameCards.push(arrayCards[i] + ""); // [i] hier kommt fieldSize Nummer, weil for diese Wert (fieldSize) erhöht hat. 
            gameCards.push(arrayCards.splice(i, 1) + ""); // dupliziert die Länge. Mann entfernt in arrayCard (i = fieldSize-Wert, nur ein mal) und dann push diese länge in gameCards. 
            gameCards = gameCards.sort(() => Math.random() - 0.5);
            let cardSpan = document.createElement("span");
            playStart.appendChild(cardSpan);
            cardSpan.classList.add("card");
            cardSpan.setAttribute("id", "span" + i);
            for (let i = 0; i < gameCards.length; i++) {
                cardSpan.innerHTML = gameCards[i];
            }
        }
    }
    function gameMemory() {
        //console.log(gameMemory);
    }
})(memorySettings || (memorySettings = {}));
//# sourceMappingURL=memory.js.map