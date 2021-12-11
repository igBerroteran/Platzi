var estudiantes = ["Juan", "Maria", "Rosa", "Daniel"];

function saludar(estudiante){
      console.log(`Hola, ${estudiante}`);
}

/*for(var i = 0; i < estudiantes.length; i++){
    saludar(estudiantes[i]);

}*/

/*for (var bicho of estudiantes ) {/*El valor del array estudiantes*/
   /* saludar(bicho);
} */

/*Mientras esto sea verdad, se va a correr ese codigo*/
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludar(estudiante)
}