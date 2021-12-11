var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
    };

miAuto.marca

/*Propiedad funcion "metodo"*/
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.ano}`)/*this es una variable hace referencia al objeto*/
        /*this.marca = this.modelo  */
     }
    };
    miAuto.detalleDelAuto  /*Acceder al metodo de un objeto*/