
// Name: Odds vs. Evens

function oddsVsEvens(num) {
    let oddTotal = 0;
    let evenTotal = 0;
    String(num).split('').forEach((currentNumber) => {
        (parseInt(currentNumber) % 2 === 0) ? (evenTotal += parseInt(currentNumber)) : (oddTotal += parseInt(currentNumber));
    })
    if (oddTotal === evenTotal) return "equal";
    return (oddTotal > evenTotal) ? "odd" : "even";
}

oddsVsEvens(44547);
