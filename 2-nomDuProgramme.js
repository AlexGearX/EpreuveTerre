function getFilename(fullPath) {
    return fullPath.replace(/^.*[\\\/]/, '');
}

console.log(getFilename(__filename));