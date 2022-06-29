var myArgs = process.argv.slice(2);

if (myArgs.length == 2) {
    if (isNumeric(myArgs[0]) && isNumeric(myArgs[1])) {
        var nombre = parseInt(myArgs[0]);
        var puissance = parseInt(myArgs[1]);
        var total = nombre;
        for (let index = 1; index < puissance; index++) {
            total *= nombre;
        }// ou Math.pow()
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