var myArgs = process.argv.slice(2);
var nombre = 0;


for (let index = 0; index < myArgs.length; index++) {
    if (!isNumeric(myArgs[index])) { Error(); }
}

for (let index = 1; index < myArgs.length; index++) {
    if (myArgs[index] < myArgs[index - 1]) {
        console.log("Pas triée !");
        process.exit(1);
    }
}

console.log("Triée !");


function Error() {
    console.log("Erreur.");
    process.exit(1);
}

function isNumeric(num) {
    return !isNaN(num);
}