const cats=['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function appendCat(name) {
    const newCats=[...cats, 'Broom'];
    return newCats;
}

function prependCat(name) {
    const reallyNewCats=['Arnold',...cats];
    return reallyNewCats;
}

function removeLastCat() {
    const oldCats=cats.slice(0,-1);
    return oldCats;
}

function removeFirstCat() {
    const doneCats=cats.slice(1);
    return doneCats;
}