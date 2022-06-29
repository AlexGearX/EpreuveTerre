var myArgs = process.argv.slice(2);
var argInvert = "";
for (let index = (myArgs.length - 1); 0 <= index; index--) {
    var argToCharArray = myArgs[index].split('');
    for (let a = (argToCharArray.length - 1); 0 <= a; a--) {
        argInvert += argToCharArray[a];
    }
    argInvert += " ";
}

console.log(argInvert);