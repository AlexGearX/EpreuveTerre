var myArgs = process.argv.slice(2);

if (myArgs.length == 1) {
    if (isNumeric(myArgs[0])) {
        var nombre = parseInt(myArgs[0]);
        var total = Math.sqrt(nombre);
        console.log(total);
    } else {
        Error();
    }
} else {
    Error();
}

function Error() {
    console.log("Erreur.");
}

function isNumeric(num) {
    return !isNaN(num);
}