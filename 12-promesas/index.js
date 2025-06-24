const wait = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(true);
    }, time);

});



wait(2000)
    .then((result) => {
        console.log('Se cumplió la promesa 1', result);
        return wait(2000);
    }).then(result => {
        console.log('Se cumplió la promesa 2', result);
        return wait(2000);
    }).then(result => {
        console.log('Se cumplió la promesa 3', result);
        return wait(2000);
    }).catch(err => {
        console.log('No se cumplió la promesa', err)
    });