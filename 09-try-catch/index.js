try {
    const text = '10';
    const number = parseInt(text);
    console.log(number);

} catch (err) {
    console.log('Algo salió mal.', err.message || err.toString());
} finally {
    console.log('END')
}
let loading = true;
try {
    const existe = false;
    if (!existe) {
        throw Error('No existe la carpeta')
    }
    console.log('Éxito.')
} catch (err) {
    console.log('Algo salió mal.', err.message || err.toString());
} finally {
    loading = false;
}