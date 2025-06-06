import { Animal, Pug, Dog } from './herencia.js';

// const { Animal, Pug, Dog } = require('./herencia.js');

class Tel {
    _brand;
    _model;
    _baterryLevel = 0;
    _isOn;

    constructor(brand, model, isOn = true, baterryLevel = 0) {
        this._brand = brand;
        this._model = model;
        this._isOn = isOn;
        this._baterryLevel = baterryLevel;
    }

    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get isOn() {
        return this._isOn;
    }
    get baterryLevel() {
        return this._baterryLevel;
    }


    set brand(_brand) {
        this._brand = _brand;
    }
    set model(_model) {
        this._model = _model;
    }
    set isOn(_isOn) {
        this._isOn = _isOn;
    }
    set baterryLevel(_baterryLevel) {
        this._baterryLevel = _baterryLevel;
    }
    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;

    }
    charge() {
        this._baterryLevel++;
    }

    makeCall(number) {
        this._baterryLevel--;
        return 'Calling ' + number;
    }

}

const iphone = new Tel('Apple', '16 Pro', true, 50);
const samsung = new Tel('Samsung', 'S22');

iphone.brand = 'AAA'
console.log(iphone.brand)
console.log(iphone.model)

console.log(samsung.baterryLevel)
const result = samsung.makeCall('23456789');
console.log(result)


iphone.makeCall('3333333333')
