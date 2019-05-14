class Car{
    public matricula:string;
    public color:string;
    public marca:string;
    public wheels:Wheel[]=new Array();
    
    constructor(plate:string,color:string,brand:string){
        this.matricula=plate;
        this.color=color;
        this.marca=brand;
        this.wheels=[];
    }
    
    
    addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}