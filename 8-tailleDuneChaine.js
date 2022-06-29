var myArgs = process.argv.slice(2);

if (myArgs.length < 2 && myArgs.length < 0) {
    if (isNumeric(myArgs[0])) {
        Error();
        return;
    }
    argToCharArray = myArgs[0].split('')
    console.log("La chaine de caractère fait " + argToCharArray.length + " caractères")

} else {
    Error();
}

function Error() {
    console.log("Erreur.");
}

function isNumeric(num) {
    return !isNaN(num);
}