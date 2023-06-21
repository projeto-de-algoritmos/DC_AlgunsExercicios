// Só pra eu não perder de onde tirei isso
export function timerReference() {
    var diff = new Date()
    // https://www.w3schools.com/howto/howto_js_countdown.asp
    // var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    // var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    // var milliseconds = Math.floor((diff % (1000 * 60))); // Não tenho certeza se tá certo

    // https://codepen.io/jasonleewilson/pen/gPrxwX
    var hours = diff.getHours() & 0;
    var minutes = diff.getMinutes();
    var seconds = diff.getSeconds();
    var milliseconds = diff.getMilliseconds();
    var millisecondsStr = String(milliseconds).padStart(3, "0");
}

export function dateToFormattedString(d: Date) {
    // https://codepen.io/jasonleewilson/pen/gPrxwX

    // var hours = d.getHours() & 0;
    // var hoursStr = String(hours).padStart(2, "0");
    var minutes = d.getMinutes();
    var minutesStr = String(minutes).padStart(2, "0");
    var seconds = d.getSeconds();
    var secondsStr = String(seconds).padStart(2, "0");
    var milliseconds = d.getMilliseconds();
    var millisecondsStr = String(milliseconds).padStart(3, "0");

    // return `${hoursStr}h ${minutesStr}m ${secondsStr}s ${millisecondsStr}ms`;
    return `${minutesStr}m ${secondsStr}s ${millisecondsStr}ms`;
}