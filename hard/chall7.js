
// Name: All or Nothing

function possiblyPerfect(key, answers) {
    let numCorrect = 0,
        numIncorrect = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === key[i]) {
            numCorrect += 1;
        } else if (key[i] === "_") {
            numCorrect += 1;
            numIncorrect += 1;
        } else {
            numIncorrect += 1;
        }
    }
    return numIncorrect === key.length || numCorrect === key.length;
}

possiblyPerfect(['A', '_', 'C', '_', 'B'], ['A', 'D', 'C', 'E', 'B']);