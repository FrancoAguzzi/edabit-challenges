
// Name: The Karaca's Encryption Algorithm
// URL: https://edabit.com/challenge/ccZBsRp6pX869gyqx

function encrypt(word) {
    let reversed = word.split('').reverse().join('');
    let replaced = reversed.replace(/a/g, 0).replace(/e/g, 1).replace(/o/g, 2).replace(/u/g, 3);
    return replaced + "aca";
}

encrypt("karaca");


/* Description:

Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
o => 2
u => 3

Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca" */