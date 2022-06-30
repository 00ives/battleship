//////////////////////// SECTION 1/////////////////////////
//print out a after 3 secs,b after 2 secs, c after 1 sec
// const myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('a');
//         resolve();
//     }, 3000);
// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('b');
//             resolve();
//         }, 2000);
//     })
// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('c');
//             resolve();
//         }, 1000);
//     })
// })

///////////////////////REFACTORING SECTION 2//////////////////////////

// const waitTime = (letterValue, timeToWait) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(letterValue);
//             resolve();
//         }, timeToWait)
//     })
//
// }
//
// function letters() {
//
//     const myPromise = waitTime('a', 750)
//         .then(() => {
//             return waitTime('b', 500)
//         }).then(() => {
//             return waitTime('c', 250)
//         })

///////////////////////////REFACTORING SECTION 3///////////////////

const refactored = (letterValue, timeToWait) => {
    return () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(letterValue);
                resolve();
            }, timeToWait)
        })
    }
}

const letters = () => {

    const myPromise = refactored('a', 750)()
        .then(refactored('b', 500))
        .then(refactored('c', 250));

}

letters();
