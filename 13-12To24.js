var myArgs = process.argv.slice(2);
var heureDecouper;
var heureAModifier;
var minutes;
var matinOuApresMidi = "";
if (myArgs.length == 1) {
    heureDecouper = myArgs[0].split('');
    if (heureDecouper.length != 7) { Error() }
    heureAModifier = parseInt(heureDecouper[0] + heureDecouper[1]);
    minutes = parseInt(heureDecouper[3] + heureDecouper[4]);
    matinOuApresMidi = (heureDecouper[5] + heureDecouper[6]);
    if (!isNumeric(heureAModifier) || !isNumeric(minutes) || heureAModifier > 23 || heureAModifier < 0 || minutes < 0 || minutes > 59) { Error() }
    if (matinOuApresMidi == "PM") {
        heureAModifier += 12;
        console.log(heureAModifier + ":" + minutes)
    } else {
        console.log(heureAModifier + ":" + minutes)
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