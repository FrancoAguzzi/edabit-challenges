
// Name: Find the Shared Letters between Two Strings
// URL: https://edabit.com/challenge/33EsK9mQzGGzRkXQT

function sharedLetters(str1, str2) {
    let duplicated = "";
    str1.split('').forEach((letter) => {
        if (duplicated.indexOf(letter.toLowerCase()) > -1) {
            return;
        } else if ((str2.indexOf(letter.toLowerCase()) > -1) || (str2.indexOf(letter.toUpperCase()) > -1)) {
            duplicated += letter.toLowerCase();
        }
    })
    return duplicated.split('').sort().join('');
}
sharedLetters('My dog is a GOOD BOY 🐶', 'Do you like ice cream? 🍦')


/* Description:

Given two strings, return a string containing only the letters shared between the two.

If none of the letters are shared, return an empty string.
The function should be case insensitive (e.g. comparing A and a should return a).
Sort the resulting string alphabetically before returning it. */