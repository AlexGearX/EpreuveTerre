var myArgs = process.argv.slice(2);
var heureDecouper;
var heureAModifier;
var minutes;
if (myArgs.length == 1) {
    heureDecouper = myArgs[0].split('');
    if (heureDecouper.length != 5) { Error() }
    heureAModifier = parseInt(heureDecouper[0] + heureDecouper[1]);
    minutes = parseInt(heureDecouper[3] + heureDecouper[4]);
    if (!isNumeric(heureAModifier) || !isNumeric(minutes) || heureAModifier > 23 || heureAModifier < 0 || minutes < 0 || minutes > 59) { Error() }
    if (heureAModifier > 12) {
        heureAModifier -= 12;
        console.log(heureAModifier + ":" + minutes + "PM")
    } else {
        console.log(heureAModifier + ":" + minutes + "AM")
    }

} else {
    Error();
}

function Error() {
    console.log("Erreur.");
    process.exit(1);
}

function isNumeric(num) {
    return !isNaN(num);
}