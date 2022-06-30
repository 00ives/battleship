function placeHorizontalShip (board,colCoord, rowCoord) {
    let rowContents = board[rowCoord].split(' ');
    //console.info(rowContents)

    for (let columnSearchNum = 1; columnSearchNum < rowContents.length; columnSearchNum++) {
        if (columnSearchNum === colCoord){
            rowContents[columnSearchNum] = '$';
            rowContents[columnSearchNum+1] = '$';
            rowContents[columnSearchNum+2] = '$';
            //console.info('new row contents' + rowContents);
        }
    }

    let replacementString = '';

    for (let i = 1; i < rowContents.length ; i++) {
    replacementString += ' ' + rowContents[i];
    }
    replacementString = rowCoord + replacementString;
    //console.info('the replacement string is ' + replacementString);

    board[rowCoord] = replacementString;

    //console.info(board);
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


function main (){
    let testPlayer = [];
    testPlayer = buildGame(testPlayer);
    let player = placeHorizontalShip(testPlayer,1,8);
    console.info(`the new player data is: ${player}`);
}
main();