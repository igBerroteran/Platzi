if (false) {   //Quiere decir que esto va a pasar, si es false, no va a hacer nada
    console.log("hola")
} else {
    console.log("No hola")
}

/*if (false) {   //Quiere decir que esto va a pasar, si es false, no va a hacer nada
    console.log("hola")
} else if {                            //entonces podria ser esto
    console.log("No hola")
}*/

var edad =18;
if (edad == 18) {
    console.log("Puedes votar")
} else if (edad > 18) {
    console.log("puedes votar")
} else {
    console.log("No puedes votar")
}

//operador ternario
condition ? true : false; /*condicion si es true, sino es false*/
var numero = 1;

var resultado = numero === 1 ? "Si soy un 1" : "No soy un 1";