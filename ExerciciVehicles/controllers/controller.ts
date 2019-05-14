

function createCar(plate:string,color:string,brand:string){
    //definimos variables de matricula, color, i marca del coche del HTML i las encapsulamos para que entre como info para la classe
    var plate = (<HTMLSelectElement>document.getElementById("plate")).value;
    var color = (<HTMLSelectElement>document.getElementById("color")).value;
    var brand = (<HTMLSelectElement>document.getElementById("brand")).value;
    //definimos variable de coche que contiene la classe Car que a la vez contiene los elementos anteriores
    var car = new Car(plate,color,brand);
    // definimos las variables de ruedas i diametros
    var wheel1 = (<HTMLSelectElement>document.getElementById("Wheel1")).value;
    var diamWheel1 = parseFloat((<HTMLSelectElement>document.getElementById("DiamWheel1")).value);
    var wheel2 = (<HTMLSelectElement>document.getElementById("Wheel2")).value;
    var diamWheel2 = parseFloat((<HTMLSelectElement>document.getElementById("DiamWheel2")).value);
    var wheel3 = (<HTMLSelectElement>document.getElementById("Wheel3")).value;
    var diamWheel3 = parseFloat((<HTMLSelectElement>document.getElementById("DiamWheel3")).value);
    var wheel4 = (<HTMLSelectElement>document.getElementById("Wheel4")).value;
    var diamWheel4 = parseFloat((<HTMLSelectElement>document.getElementById("DiamWheel4")).value);
    //variable para la validación de la matricula
    var plateValidation = (/^[0-9]{4}[a-zA-Z]{3}$/.test(plate));
    var z = 0;
    // condición: si los diametros introducidos son inferiores o mayores a 0.4 y 2 (respectivamente) o la matrícula no contiene 4 numeros i 3 letras que se ejecute el alert
    if(!plateValidation){
        alert("La matrícula tiene que empezar por 4 números i acabar con 3 letras");
    }else{
        if((diamWheel1 >2)||(diamWheel2>2)||(diamWheel3>2)||(diamWheel4>2)||(diamWheel1 <0.4)||(diamWheel2<0.4)||(diamWheel3<0.4)||(diamWheel4<0.4)){
            alert("Los diametros tienen que ser inferiores a 2, y mayores a 0.4");
        }else{ // de lo contrario que se añadan las ruedas i los diametros
            car.addWheel(new Wheel(diamWheel1,wheel1));
            car.addWheel(new Wheel(diamWheel2,wheel2));
            car.addWheel(new Wheel(diamWheel3,wheel3));
            car.addWheel(new Wheel(diamWheel4,wheel4));
            if((isNaN(car.wheels[0].diameter))||(isNaN(car.wheels[1].diameter))||(isNaN(car.wheels[2].diameter))||(isNaN(car.wheels[3].diameter))){ // que obligue a introducir un valor a cada diámetro
                alert("Debes introducir algun valor válido al diámetro de cada rueda");
            }else{
            console.log(car) // se muestre el resultado final por consola
            var recuadre = (<HTMLSelectElement>document.getElementById("recuadre")); 
            recuadre.innerHTML="<h4>PLATE </h4>" + car.matricula // y se imprima todo por pantalla
            + " <h4>COLOR </h4>" +car.color + " <h4>BRAND </h4>" + car.marca
            + " <h4>WHEELS</h4>"+"<span>Brand Wheel 1 </span>= "+JSON.stringify(car.wheels[0].brand)+" <span>Diameter Wheel 1 </span>= "+JSON.stringify(car.wheels[0].diameter)+"</br>"
                                    +"<span>Brand Wheel 2 </span>= "+JSON.stringify(car.wheels[1].brand)+" <span>Diameter Wheel 2 = </span>"+JSON.stringify(car.wheels[1].diameter)+"</br>"
                                    +"<span>Brand Wheel 3 </span> = "+JSON.stringify(car.wheels[2].brand)+" <span>Diameter Wheel 3 = </span>"+JSON.stringify(car.wheels[2].diameter)+"</br>"
                                    +"<span>Brand Wheel 4 </span> = "+JSON.stringify(car.wheels[3].brand)+" <span>Diameter Wheel 4 = </span>"+JSON.stringify(car.wheels[3].diameter);
                }
            }
        }
    }



