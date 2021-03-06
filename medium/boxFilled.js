
// Name: Percentage of Box Filled In
// URL: https://edabit.com/challenge/qYgE5kyLYuRve4Zap

function percentFilled(box) {
    let numO = 0;
    let numBlanck = 0;
    for (let i = 0; i < box.length; i++) {
        numO += box[i].split("o").length - 1;
        numBlanck += box[i].split(" ").length - 1;
    }
    return Math.round(numO / (numBlanck + numO) * 100) + "%";
}

percentFilled(["#######", "#o oo #", "#######"]);


/* Description:

Create a function that calculates what percentage of the box is filled in. Give your answer as a string percentage rounded to the nearest integer. */
