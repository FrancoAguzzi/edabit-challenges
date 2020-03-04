
// Name: Reverse Coding Challenge #1

function mysteryFunc(str) {
    let newStr = "";
    let currentLetter = str[0]
    for (let i = 1; i < str.length; i++) {
        if (!isNaN(str[i])) newStr += currentLetter.repeat(str[i]);
        else currentLetter = str[i]
    }
    return newStr;
}

mysteryFunc("A4B5C2");


/* Description:

This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

Your task is to create a function that, when fed the inputs below, produce the sample outputs shown. */