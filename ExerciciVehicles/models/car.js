"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.matricula = plate;
        this.color = color;
        this.marca = brand;
        this.wheels = [];
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
