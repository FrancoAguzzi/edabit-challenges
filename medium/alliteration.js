
// Name: Amazing Alliteration
// URL: https://edabit.com/challenge/RdypN7bxyrjnyhcCe

function alliterationCorrect(sentence) {
    let firstLetter;
    let arr = sentence.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 3 && typeof firstLetter === "undefined") {
            firstLetter = arr[i][0];
        } else if (arr[i].length > 3 && arr[i][0].toLowerCase() !== firstLetter.toLowerCase()) {
            return false
        }
    }
    return true;
}

alliterationCorrect('She swam to the shore.')


/* Description:

Alliteration refers to a sequence of words that begin with the same letter. For this exercise, a sentence is correctly alliterated if all words strictly greater than or equal to 3 characters begin with the same letter. */