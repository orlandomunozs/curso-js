

// callback es una funcion que recibe otra función como parametro/argunmento/entrada

function greet(name, callback) {
    console.log(`Hola ${name}`);
    callback();
}

function sayBye() {
    console.log('Adios');
}

greet('Orlando', sayBye);
