namespace EventInspector {
    window.addEventListener("load", handleLoad); //install load listener an window 
}
function handleLoad(): void {
    document.addEventListener("mousemove", setInfoBox); //install mouse move listener on document
    document.addEventListener("click", logInfo); //install click listeners on document
    document.addEventListener("keyup", logInfo); //install keyup listener on document
    document.body.addEventListener("click", logInfo); //click listener on document + Body
    document.body.addEventListener("keyup", logInfo); //keyup listener on document + Body
    let div0: HTMLDivElement = <HTMLDivElement>document.getElementById("div0");
    div0.addEventListener("click", logInfo); //install click an keyup listener on document + Div
    div0.addEventListener("keyup", logInfo); 
    let div1: HTMLDivElement = <HTMLDivElement>document.getElementById("div1");
    div1.addEventListener("click", logInfo); //install click and keyup listener on document + Div
    div1.addEventListener("keyup", logInfo); 
}
function setInfoBox(_event: MouseEvent): void {
    let x: number = _event.pageX; //display mouse position - horizontale Koordinaten 
    let y: number = _event.pageY; //display mouse position - vertikale Koordinaten 
    let destino: EventTarget | null = _event.target;   //event's target 
    //console.log(destino);
    //display mouse position and event' target in span Element 
    let span: HTMLElement = <HTMLElement>document.getElementById("span");
    span.innerHTML = "X: " + x + "<br>" + "Y: " + y + "<br>" + "target" + destino;

    //set style attributes top and left of span to mouseposition + offset
    span.style.left = (x + 15) +  "px"; // + span.offsetTop;
    span.style.top = (y + 15) + "px" ; //+ span.offsetLeft;
}
function logInfo(_event: Event): void {
    //log event's type, target, currenTarget and the whole event object to the browser-console 
    console.log("event type" + _event.type);
    console.log("event target" + _event.target);
    console.log("event currentTarget" + _event.currentTarget);
    console.log("whole event object" + _event);
}