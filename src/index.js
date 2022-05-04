startGame();

function startGame() {
let player1 = []
let player2 = []
player1 = buildGame(player1);
player2 = buildGame(player2);
// let player2 = ;

printTable(player1 , 1)
printTable(player2 , 2)
}


function buildGame(player) {
    player = [];
    player.push('  A B C D E F G H');
    for (let i = 1; i < 9; i++) {

        player.push(i + ' - - - - - - - -');
    }
    return player;
}

function printTable(playerTable, playerNumber) {

    if (playerNumber > 0) {
        console.log("Player" + playerNumber + "'s Board");
    }
    for (let i = 0; i < playerTable.length; i++) {
        console.log(playerTable[i]);
    }
}

