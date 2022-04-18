namespace memorySettings {

    //let nPrompt: string = prompt("Enter a number between 5 and 25", "9");
    let arrayCards: string[] = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
    
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("keydown", createCards);
        document.addEventListener("click", gameMemory);
    }
    // Erstellt die Karten
    function createCards(): void {
        let fieldSize: number = 0; // ParseInt analysiert einen Wert als Zeichenfolge und gibt die erste ganze Zahl zurück.
        let gameCards: string[] = [];
        let cardSpan: HTMLElement = <HTMLElement>document.getElementById("card");
        arrayCards = arrayCards.sort(() => Math.random() - 0.5); //sort (Alfabetisch aufgeräumt) Math.random (Zufällige Zahl)
        console.log(arrayCards);

        for (let i: number = 0; i < fieldSize; i++) {
            gameCards.push(arrayCards[i]); // [i] hier kommt fieldSize Nummer, weil for diese Wert (fieldSize) erhöht hat. 
            gameCards.push(arrayCards.splice(i, 1) + ""); // dupliziert die Länge. Mann entfernt in arrayCard (i = fieldSize-Wert, nur ein mal) und dann push diese länge in gameCards. 
            gameCards = gameCards.sort(() => Math.random() - 0.5 );  
            
            for (let i: number = 0; i < gameCards.length; i++) {
                cardSpan.innerHTML = gameCards[i]; 
                cardSpan.classList.add ("cardSpan");        
            }
        }
       
        
        




    }

    function gameMemory(): void {
        console.log(gameMemory);
        

    }

}