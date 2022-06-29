var myArgs = process.argv.slice(2);

if (myArgs.length == 1) {
    if (isNumeric(myArgs[0])) {
        var nombre = parseInt(myArgs[0]);
        var compteurDivisibilite = 0;
        if (nombre < 2) { Error(); }
        for (let index = 1; index <= nombre; index++) {
            if (nombre % index === 0) {
                compteurDivisibilite++;
            }
        }
        if (compteurDivisibilite == 2) {
            console.log("Oui, " + nombre + " est un nombre premier");
            compteurDivisibilite = 0;
        } else {
            console.log("Non, " + nombre + " n'est pas un nombre premier");
            compteurDivisibilite = 0;
        }
    } else {
        Error();
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