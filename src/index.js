//////////////////////////////////////////////////////
//Im still having issues grabbing the user input from the console
//I tried readline, but im having issues with the require() do i need to import something in order to use?
// node js parse a string to a number
//2Hr on plane ride to dallas
//1.5 hr in PVR airport
//1 hour monday
//so far 2 hour tuesday
//learned about map, reduce, reject,filter
//look up JSON.stringify()


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

const getShipDirection = async (playerNum) => {
    let legit = false;
    let shipDirection;

    while (!legit) {
        shipDirection = await playerInput(`${playerNum} Pick a direction to place your ship (v)ertical or (h)orizontal): `)
        if (shipDirection === 'v' || shipDirection === 'h') {
            console.info(`The ship direction is ${shipDirection}`);
            legit = true;
            return shipDirection;
        } else if (shipDirection === 'q') {
            console.info('Thanks for playing!');
            return process.exit(0);
        } else {
            console.log('Incorrect input, please enter (vertical or horizontal)')

        }
    }


    console.info(`The ship direction is: ${shipDirection}`)

    process.exit(0)
}
function buildGame(player) {
    player = [];
    player.push('  A B C D E F G H');
    for (let i = 1; i < 9; i++) {

        player.push(i + ' - - - - - - - -');
    }
    return player;
}

function printTable(playerTable, playerNumber, tableType) {

    if (playerNumber > 0) {
        console.log(`Player ${playerNumber}'s ${tableType} Board`);
    }

    for (let i = 0; i < playerTable.length; i++) {
        console.log(playerTable[i]);
    }
}

const getShipColCoordinate = async (shipDirection) => {
    let validColumn = false;
    let coords;

    if (shipDirection.toLowerCase() === 'v'){
        while (!validColumn){

            coords = await playerInput('Please enter a column value between A and H: ')
            if (coords.toLowerCase() >= 'a' && coords <= 'h'){
                // console.info('We made it here vertical: ' + coords);
                validColumn = true;
            }
            else {
                console.log('Invalid input please enter a column value between A and H: ')
            }
        }
    }

    if (shipDirection.toLowerCase() === 'h'){
        while (!validColumn){

            coords = await playerInput('Please enter a column value between A and F: ')
            if (coords.toLowerCase() >= 'a' && coords <= 'f'){
                // console.info('We made it here horizontal: ' + coords);
                validColumn = true;
            }
            else {
                console.log('Invalid input please enter a column value between A and F: ')
            }
        }
    }


    return coords;
}

const getShipRowCoordinate = async (shipDirection) => {
    let validRow = false;
    let coords;
    if (shipDirection.toLowerCase() === 'v'){
        while (!validRow){

            coords = await playerInput('Please enter a row value between 1 and 6: ')
            if (coords >= '1' && coords <= '6'){
                // console.info('We made it here vertical: ' + coords);
                validRow = true;
            }
            else {
                console.log('Invalid input please enter a row value between 1 and 6: ')
            }
        }
    }
    if (shipDirection === 'h'){
        while (!validRow){

            coords = await playerInput('Please enter a row value between 1 and 8: ')
            if (coords.toLowerCase() >= '1' && coords <= '8'){
                // console.info('We made it here horizontal: ' + coords);
                validRow = true;
            }
            else {
                console.log('Invalid input please enter a row value between 1 and 8: ')
            }
        }
    }


    return coords;
}

function convertLetterEntry(columnCoord) {


    let letNumVal = 0;

    switch (columnCoord.toLowerCase()) {
        case "a":
            letNumVal = 1;
            break;
        case "b":
            letNumVal = 2;
            break;
        case "c":
            letNumVal = 3;
            break;
        case "d":
            letNumVal = 4;
            break;
        case "e":
            letNumVal = 5;
            break;
        case "f":
            letNumVal = 6;
            break;
        case "g":
            letNumVal = 7;
            break;
        case "h":
            letNumVal = 8;
            break;

    }
    return letNumVal;
}

// function placeHorizontalShip (board, colCoord, rowCoord) {
//     let rowContents = board[rowCoord].split(' ');
//     //console.info(rowContents)
//
//     for (let columnSearchNum = 1; columnSearchNum < rowContents.length; columnSearchNum++) {
//         if (columnSearchNum === colCoord){
//             rowContents[columnSearchNum] = '$';
//             rowContents[columnSearchNum+1] = '$';
//             rowContents[columnSearchNum+2] = '$';
//             //console.info('new row contents' + rowContents);
//         }
//     }
//
//     let replacementString = '';
//
//     for (let i = 1; i < rowContents.length ; i++) {
//         replacementString += ' ' + rowContents[i];
//     }
//     replacementString = rowCoord + replacementString;
//     //console.info('the replacement string is ' + replacementString);
//
//     board[rowCoord] = replacementString;
//
//     //console.info(board);
//     return board;
// }

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


function placeVerticalShip(board, colCoord, rowCoord) {
    let rowContents = board[rowCoord].split(' ');
    const endShipRow = Number(rowCoord) + 2;
    console.info(endShipRow);
    //console.info(rowContents)

    for (let columnSearchNum = 1; columnSearchNum < rowContents.length; columnSearchNum++) {

        if (columnSearchNum === colCoord) {
            rowContents[columnSearchNum] = '$';
            // console.info('new row contents' + rowContents);
        }
    }

    for (rowCoord; rowCoord <= endShipRow; rowCoord++) {
        let replacementString = '';

        for (let i = 1; i < rowContents.length; i++) {
            replacementString += ' ' + rowContents[i];
        }
        replacementString = rowCoord + replacementString;
        // console.info('the replacement string is ' + replacementString);

        board[rowCoord] = replacementString;
    }

    // console.info(board);
    return board;
}

async function switchTurns(question){
    let moveOn = false;
    let contConfirmed;
    console.info(question);
    while(!moveOn){

        contConfirmed = await playerInput('Enter 1 to continue: ');
        if (contConfirmed === '1'){
            moveOn = true;
        }
    }
    return contConfirmed;
}

const prepGame = async () => {

    let defenseBoardP1 = [];
    let defenseBoardP2 = [];
    let attackBoardP1 = [];
    let attackBoardP2 = [];


    defenseBoardP1 = buildGame(defenseBoardP1);
    defenseBoardP2 = buildGame(defenseBoardP2);
    attackBoardP1 = buildGame(attackBoardP1);
    attackBoardP2 = buildGame(attackBoardP2);

    let gameData = {defenseBoardP1 : defenseBoardP1 ,
                    attackBoardP1 : attackBoardP1,
                    defenseBoardP2 : defenseBoardP2,
                    attackBoardP2 : attackBoardP2}

    let shipDirectionP1;
    let shipDirectionP2;
    let shipColCoordinateP1;
    let shipColCoordinateP2;
    let shipRowCoordinateP1;
    let shipRowCoordinateP2;

    printTable(defenseBoardP1, 1, 'defense');


    shipDirectionP1 = await getShipDirection('P1');
    shipColCoordinateP1 = await getShipColCoordinate(shipDirectionP1);
    shipColCoordinateP1 = convertLetterEntry(shipColCoordinateP1);
    // console.log('This is the Col coord as a number: ' + shipColCoordinateP1);
    shipRowCoordinateP1 = await getShipRowCoordinate(shipDirectionP1);

    if (shipDirectionP1 == 'h'){
        defenseBoardP1 = placeHorizontalShip(defenseBoardP1,shipColCoordinateP1,shipRowCoordinateP1);
    }else{
        defenseBoardP1 = placeVerticalShip(defenseBoardP1,shipColCoordinateP1,shipRowCoordinateP1);
    }

    printTable(defenseBoardP1, 1, 'defense');
    printTable(attackBoardP1, 1, 'attack');

    // console.info('this next part is a test');
    // console.info(gameData.defenseBoardP1 + '\n' +gameData.attackBoardP1);

    await switchTurns('Player 1\'s Table created. Continue to Build player 2\'s Tables')
    .then(()=>{console.clear();});

    printTable(defenseBoardP2, 2, 'defense');

    shipDirectionP2 = await getShipDirection('P2');
    shipColCoordinateP2 = await getShipColCoordinate(shipDirectionP2);
    shipColCoordinateP2 = convertLetterEntry(shipColCoordinateP2);
    // console.log('DELETE ME '+ 'this is the new col coord ' + shipColCoordinateP2);
    shipRowCoordinateP2 = await getShipRowCoordinate(shipDirectionP2);

    if (shipDirectionP2 == 'h'){
        defenseBoardP2 = placeHorizontalShip(defenseBoardP2,shipColCoordinateP2,shipRowCoordinateP2);
    }else{
        defenseBoardP2 = placeVerticalShip(defenseBoardP2,shipColCoordinateP2,shipRowCoordinateP2);
    }

    printTable(defenseBoardP2, 2, 'defense');
    printTable(attackBoardP2, 2, 'attack');

    // console.info(`P1 direction: ${shipDirectionP1}\n P1 Col Coordinate: ${shipColCoordinateP1}\n P1 Row Coordinate: ${shipRowCoordinateP1}\n P2 direction: ${shipDirectionP2}\n P2 Col Coordinate: ${shipColCoordinateP2}\n P1 Row Coordinate: ${shipRowCoordinateP2}`);

    await switchTurns('Player 2\'s Table created. Continue to start game')
        .then(()=>{console.clear();});


    return gameData;

}

const playGame = async ()=>{
    let gameData = await prepGame();
    gameData = {...gameData, currentTurn : 1, p1Score : 0, p2Score : 0};
    let gameOver = false;
    let player1Turn = true;
    let player2Turn = false;
    let missedShot = true;

    console.info(gameData);

    while (!gameOver){

        if (player1Turn){
            await makeShot(1, gameData)
            //let attackCoord = await playerInput('Choose a coordinate to bomb within A1 and H8: ');
        }
        else if (player2Turn){

        }
        if (missedShot){
            player1Turn = !player1Turn;
            console.info(player1Turn);
        }else{

        }

    }
    let attackCoord = await playerInput('Choose a coordinate to bomb within A1 and H8: ');

    // need a player turn
    //need a player coordinate
    //let attackRowValue = playerInput('Choose a row to bomb: ');

    process.exit(0);
}

const makeShot = (playerNumber, gameData) => {
return
}


playGame();