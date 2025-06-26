console.log('Inicio del programa');
setTimeout(() => {
    console.log('Consulta 1', 'Han pasado 5 segundos');
    setTimeout(() => {
        console.log('Consulta 2', 'Han pasado 5 segundos');
        setTimeout(() => {
            console.log('Consulta 3', 'Han pasado 5 segundos');
            setTimeout(() => {
                console.log('Consulta 4', 'Han pasado 5 segundos');
                console.log('Fin del programa');
            }, 5000);
        }, 5000);
    }, 5000);
}, 5000);
