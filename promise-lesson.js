const myPromise = new Promise((resolve) => {
    resolve(1);
})
myPromise.then((a) => {
    console.info('here ', a)
    return [2, 'blah'];
}).then((a) => {
    console.info('here too ', a)

    return new Promise((resolve) => {
        setTimeout(() => {
            console.info('dragons');
            resolve(a);
        }, 1000)
        // resolve(a);
    })


}).then((a) => {
    console.info('here thrice ', a)
})
