
// Name: Oddish vs. Evenish

function oddishOrEvenish(num) {
    let total = 0;
    let numStr = String(num)
    numStr.split('').forEach((char) => {
        let currentNumber = parseInt(char)
        total += currentNumber
    })
    return (total % 2 === 0) ? "Evenish" : "Oddish"
}

oddishOrEvenish(43);