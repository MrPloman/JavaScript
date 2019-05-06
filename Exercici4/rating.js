'use strict'
console.log("js creado")
function marca(seleccion){ //generamos una función para que cada vez que se haga una selección
    document.querySelectorAll(".star").onclick; // cada vez que se use la función se encapsulara el click del rating
    console.log("Has seleccionado: "+seleccion);// se muestra en consola la estrella que hemos seleccionado
    document.getElementById("cartel").innerHTML="<h3>Gracias por puntuar con un "+seleccion+"</h3>"; //añadimos un mensaje en el web que nos indica qué hemos seleccionado
    for(var i = 1; i<=5; i++){ //inicializamos un bucle que parte de 1 i va aumentando
        var star = document.getElementById("star"+i); 
        if(seleccion<i){ 
            star.style.backgroundColor="";
        }else{ 
            star.style.backgroundColor="yellow";
        }
    }
};

var container = document.getElementById("stars");
document.addEventListener("click", function(event) { 
    if(event.target.closest(".star")){
        console.log("Rating Hecho")
        $("#cartel").css("display","inline");
    }else{
        document.getElementById("star1").style.backgroundColor="";
        document.getElementById("star2").style.backgroundColor="";
        document.getElementById("star3").style.backgroundColor="";
        document.getElementById("star4").style.backgroundColor="";
        document.getElementById("star5").style.backgroundColor="";
        $("#cartel").css("display","none");
        console.log("Rating Deshecho");
    }
});


