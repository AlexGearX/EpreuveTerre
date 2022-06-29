var myArgs = process.argv.slice(2);
var nombre = 0;

if (myArgs.length == 3) {

    for (let index = 0; index < myArgs.length; index++) {
        if (!isNumeric(myArgs[index])) { Error(); }
    }
    if (myArgs[0] > myArgs[1]) {
        if (myArgs[0] > myArgs[2]) {
            if (myArgs[1] > myArgs[2]) {
                nombre = myArgs[1];
            } else {
                nombre = myArgs[2];
            }
        } else {
            nombre = myArgs[0];
        }
    } else if (myArgs[0] > myArgs[2]) {
        nombre = myArgs[0];
    } else if (myArgs[1] > myArgs[2]) {
        nombre = myArgs[2];
    } else if (myArgs[2] > myArgs[1]) {
        nombre = myArgs[1];
    } else {
        Error();
    }

    console.log(nombre);

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