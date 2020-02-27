
// Name: No Hidden Fees

function hasHiddenFee(prices, t) {
    let total = 0
    let tPriceNumber = parseInt(t.substring(1));
    prices.forEach((price) => {
        let currentPriceNumber = parseInt(price.substring(1));
        total += currentPriceNumber
    });
    return total !== tPriceNumber;
}

hasHiddenFee(["$2", "$4", "$1", "$8"], "$15");
