
// Name: Words With Duplicate Letters

function noDuplicateLetters(phrase) {
    let arr = phrase.split(' ');
    let counter = 0;
    let found = false
    arr.forEach((word) => {
        word.split('').forEach((currentLetter) => {
            word.split('').some((letter) => {
                counter += (letter === currentLetter)
                if (counter > 1) {
                    found = true
                }
            })
            counter = 0;
        })
    })
    return !found;
}

noDuplicateLetters("So far, so good.");


/* Description:

Given a common phrase, return false if any individual word in the phrase contains duplicate letters. Return true otherwise. */