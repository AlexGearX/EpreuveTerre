var myArgs = process.argv.slice(2);
var resultatDiv = 0;
var resteDiv = 0;

function isNumeric(num) {
    return !isNaN(num)
}

if (isNumeric(myArgs[0]) && isNumeric(myArgs[1])) {
    var chiffreArg = parseInt(myArgs[0]);
    var chiffreArg2 = parseInt(myArgs[1]);
    resultatDiv = Math.floor(chiffreArg / chiffreArg2);
    resteDiv = (chiffreArg % chiffreArg2);

    if (resultatDiv == Infinity || resultatDiv == 0) {
        console.log("Erreur.");
        return;
    }
    console.log("resultat: " + resultatDiv);
    console.log("reste:" + resteDiv)
} else {
    console.log("au moins 1 argument n'est pas un nombre");
}