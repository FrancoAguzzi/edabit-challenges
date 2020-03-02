
// Name: Percentage of Box Filled In

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

