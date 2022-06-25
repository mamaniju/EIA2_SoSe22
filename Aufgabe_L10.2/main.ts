namespace beachPolymorphie {

    let imgData: ImageData;
    let moveable: Moveable[] = [];

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        background();
        sun();
        people();
        palm();
        createSeagull(10);
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        createClou(3);
        window.setInterval(uptade, 300);
    }
    //Cloud
    function createClou(_nCloud: number): void {
        //console.log("create Cloud");
        for (let i: number = 0; i < _nCloud; i++);
        let cloud: Cloud = new Cloud();
        moveable.push(cloud);
    }
    //Seagull
    function createSeagull(_nSeagull: number): void {
        //console.log("create Seagull");
        for (let i: number = 0; i < _nSeagull; i++); {
            let seagull: Seagull = new Seagull();
            moveable.push(seagull);
        }     
    }
    function uptade(): void {
        //console.log("UpdateCloud");
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        for (let motion of moveable) {
            motion.move(1 / 50);
            motion.draw();
        }

    }
    //draw static elements
    //Background 
    function background(): void {
        //console.log("Background");
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#7BCDDF");
        gradient.addColorStop(0, "#1874CD");
        gradient.addColorStop(0.30, "white");
        gradient.addColorStop(0.40, "#33ccff");
        gradient.addColorStop(0.70, "#ffb366");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Sun
    function sun(): void {
        //console.log("Sun", _position);
        let r1: number = 30;
        let r2: number = 45;
        //Gradient-Farbe
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "HSLA(12, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(450, 80);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //People
    function people(): void {
        let x: number = 0;
        let y: number = 0;
        crc2.save();
        crc2.translate(250, 450);
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
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    //Palmen 
    function palm(): void {
        let gradientTrunK: CanvasGradient = crc2.createLinearGradient(0, 0, 200, 0);
        gradientTrunK.addColorStop(0, "HSLA(30, 50%, 40%)");
        gradientTrunK.addColorStop(1, "HSLA(30, 90%, 100%)");
        //let nPalm: number = 3;
        crc2.save();
        crc2.translate(650, 300);
        crc2.beginPath();
        crc2.fillStyle = gradientTrunK;
        crc2.fillRect(10, 10, 25, 200);
        crc2.stroke();
        crc2.restore();
        //for (let draw: number = 0; draw < nPalm; draw++) {
        let gradientLeaves: CanvasGradient = crc2.createLinearGradient(0, 0, 200, 0);
        gradientLeaves.addColorStop(0, "HSLA(120, 20%, 50%)");
        //gradientLeaves.addColorStop(1, "HSLA(120, 25%, 20%)");
        let x: number = 10;
        let y: number = 10;
        crc2.save();
        crc2.translate(660, 300);
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
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    
}