const inputShip = () => {
    let shipDirection = '';

    const myPromise = new Promise((resolve) => {

        rl.question(`Pick a direction to place your ship(vertical or horizontal): `,
            answer => {
                if (answer === 'vertical') {
                    shipDirection = 'vertical';
                    rl.close();
                    resolve();
                } else if (answer === 'horizontal') {
                    shipDirection = 'horizontal';
                    rl.close();
                    resolve();
                } else {
                    console.log('Incorrect input, please enter (vertical or horizontal')
                    inputShip();
                }

            })
    }).then(() => {
        console.log(`The ship direction is ${shipDirection}`)
        // return shipDirection; /*, new Promise((resolve) => {resolve();})*/

    })

}