
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


/* Description:

Suppose a student can earn 100% on an exam by getting the answers all correct or all incorrect. Given a potentially incomplete answer key and the student's answers, write a function that determines whether or not a student can still score 100%. Questions with missing answers are marked with an underscore, "_". */