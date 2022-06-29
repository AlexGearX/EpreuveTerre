var myArgs = process.argv.slice(2);

function isNumeric(num) {
    return !isNaN(num)
}

if (isNumeric(myArgs[0])) {
    var chiffreArg = parseInt(myArgs[0]);
    if (chiffreArg % 2 === 0) {
        console.log(myArgs[0] + " est pair");
    } else {
        console.log(myArgs[0] + " est impair");
    }
} else {
    console.log("L'argument n'est pas un nombre");
}