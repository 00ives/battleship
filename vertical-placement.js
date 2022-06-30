function placeVerticalShip(board, colCoord, rowCoord) {
    let rowContents = board[rowCoord].split(' ');
    let endShipRow = rowCoord + 2;
    //console.info(rowContents)

    for (let columnSearchNum = 1; columnSearchNum < rowContents.length; columnSearchNum++) {

        if (columnSearchNum === colCoord) {
            rowContents[columnSearchNum] = '$';
            console.info('new row contents' + rowContents);
        }
    }

    for (rowCoord; rowCoord <= endShipRow; rowCoord++) {
        let replacementString = '';

        for (let i = 1; i < rowContents.length; i++) {
            replacementString += ' ' + rowContents[i];
        }
        replacementString = rowCoord + replacementString;

        console.info('the replacement string is ' + replacementString);

        board[rowCoord] = replacementString;
    }

    console.info(board);
    return board;
}

function buildGame(player) {
    player = [];
    player.push('  A B C D E F G H');
    for (let i = 1; i < 9; i++) {

        player.push(i + ' - - - - - - - -');
    }
    return player;
}


function main() {
    let testPlayer = [];
    testPlayer = buildGame(testPlayer);
    let player = placeVerticalShip(testPlayer, 3, 6);
    console.info(`the new player data is: ${player}`);
}

main();