var myArgs = process.argv.slice(2);
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alphabetAPartirDeArg = "";

for (let index = 0; index < alphabet.length; index++) {
    if (alphabet[index] == myArgs[0].toLowerCase()) {
        for (let a = index; a < alphabet.length; a++) {
            alphabetAPartirDeArg += alphabet[a];
        }
        break;
    }
}

if (alphabetAPartirDeArg == "") {
    console.log("l'arguments n'est pas une lettre")
} else {
    console.log(alphabetAPartirDeArg);
}