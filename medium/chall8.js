
// Name: The Conquering Queen

function canCapture([myQueen, opponentsQueen]) {
    let myQueenX = myQueen.substring(0, 1).charCodeAt(0);
    let myQueenY = myQueen.substring(1);
    let oppQueenX = opponentsQueen.substring(0, 1).charCodeAt(0);
    let oppQueenY = opponentsQueen.substring(1);
    let sameDiagonal = (Math.abs(myQueenX - oppQueenX) == Math.abs(myQueenY - oppQueenY));
    return (myQueenX === oppQueenX) || (myQueenY === oppQueenY) || sameDiagonal;
}

canCapture(['A1', 'H8']);


/* Description:

In chess, queens can move any number of squares horizontally, vertically or diagonally.

Given the location of your queen and your opponents' queen, determine whether or not you're able to capture your opponent's queen. Your location and your opponents' location are the first and second elements of the array, respectively. */