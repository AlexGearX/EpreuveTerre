var myArgs = process.argv.slice(2);

if (myArgs.length == 1) {
    myArgs[0].split('');
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