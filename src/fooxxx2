const z = (x, y) => {
    return () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(x);
                resolve();
            }, y);
        })
    }
};
// const bee = (x, y) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(x);
//             resolve();
//         }, y);
//     })
// }

const test = () => {
    const abc = z('a', 3000);
    const myPromise = abc()

        .then(z('b', 2000))
        .then(z('c', 1000))
        .then(z('d', 10));

}


test();