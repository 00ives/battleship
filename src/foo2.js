const readline = require('node:readline');
const {stdin: input, stdout: output} = require('node:process');

//const rl = readline.createInterface({input, output});
const a = () => {
    console.log('poop');
}
const b = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('paap')
            resolve()
        }, 1000)


    });
}
async function inputShip() {
    // const p = new Promise((resolve) => {
    //     setTimeout(() => {
    //         console.log('peep')
    //         resolve()
    //     }, 1000)
    //
    //
    // });
    // a();
    // await p
   console.log('foo', b());
    // await a

    // console.log('piip');

    // return p;

}

inputShip();
