namespace randomPoem {
    let subjekte: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let praedikate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let objekte: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    //console.log(subjekte);
    //console.log(praedikate);
    //console.log(objekte);

    for (let i: number = subjekte.length; i >= 1; i--) {
        //console.log(i);
        let arrayFunction: string = getVerse([], [], []);
        console.log(arrayFunction);

    }

    function getVerse(_subjekte: string[], _praedikate: string[], _objekte: string[]): string {
        //let x: string = "Alohomora";
        let vers: string = "";
        let subjekteRandom: number = Math.floor(Math.random() * subjekte.length);   
        vers += subjekte.splice(subjekteRandom, 1)[0] + " "; //Mit splice() aquí, debo cortar una palabra de mi Array subjekte de arriba, para que ésta se incerte en la variable vacia vers. 
        //addition += / Array splice(...)   / index in 0 position [0]
        //console.log(subjekteRandom);
        let praedikateRandom: number = Math.floor(Math.random() * praedikate.length);
        vers += praedikate.splice(praedikateRandom, 1)[0] + " "; 
        //console.log(praedikateRandom);
        let objekteRandom: number = Math.floor(Math.random() * objekte.length);
        vers += objekte.splice(objekteRandom, 1) [0] + " ";
        //console.log(objekteRandom);

        return (vers); 

    }
}

