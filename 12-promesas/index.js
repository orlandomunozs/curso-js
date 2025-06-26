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
    }).then(result => {
        console.log('Se cumplió la promesa 4', result);
        return wait(2000);
    }).catch(err => {
        console.log('No se cumplió la promesa', err)
    });


try {
    const result = await wait(2000)
    console.log('Se cumplió la promesa 1', result);

    const result2 = await wait(2000);
    console.log('Se cumplió la promesa 2', result2);

    const result3 = await wait(2000);
    console.log('Se cumplió la promesa 3', result3);

    const result4 = await wait(2000);
    console.log('Se cumplió la promesa 4', result4);

} catch (err) {
    console.log('No se cumplió la promesa', err)
}

