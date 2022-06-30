///////////////////////////////////////////////////////
const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input, output});

const playerInput = async (question) => {

    return new Promise((resolve) => {

        rl.question(question, direction => {
            return resolve(direction);
        })
    });
}

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

async function switchTurns(){
    let moveOn = false;
    let contConfirmed;
    while(!moveOn){

        contConfirmed = await playerInput('enter 1 to continue');
        if (contConfirmed === '1'){
            moveOn = true;
        }
    }
    return contConfirmed;
}

async function main (){
    let testPlayer = [];
    testPlayer = buildGame(testPlayer);
    let player = placeHorizontalShip(testPlayer,1,8);
    console.info(`the new player data is: ${player}`);
    const clearScrn = await switchTurns();
    console.clear();

}
main()