var piedra = 1;
var tijera = 2;
var papel = 4;


 var juego = function(a,b) {
    var re = 0;
    re = a - b;
    
     if (re == 1){
         console.log("gana piedra")
     } else if (re == 2) {
         console.log("gana tijera")
     } else if (re == 3) {
         console.log("gana papel")
     } else if (a == a || b == b){
         console.log("otra vez")
     }
    
}

juego(piedra, tijera);
console.log(juego)



/*piedra vs tijera = 1
tijera vs papel = 2
papel vs piedra = 3*/