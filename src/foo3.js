const test = () => {

    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            console.log('a');
            resolve();
        }, 3000)

    }).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('b');
                resolve();
            }, 2000)
        })

    }).then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('c');
                resolve();
            }, 1000)

        })

    });


}

test();

// function add(a,b){
//     return a+b;
// }
// add(1,3);
//
// function Promise(fn){
//     return fn;
// }
// function promiseCallback(resolve,reject){
//
//
// }
// Promise((resolve,reject) => {})
