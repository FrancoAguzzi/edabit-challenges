
// Name: The Karaca's Encryption Algorithm

function encrypt(word) {
    let reversed = word.split('').reverse().join('');
    let replaced = reversed.replace(/a/g, 0).replace(/e/g, 1).replace(/o/g, 2).replace(/u/g, 3);
    return replaced + "aca";
}

encrypt("karaca");