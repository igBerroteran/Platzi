/* consola https://jsconsole.com/*/
var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "tv", costo: 100},
    {nombre: "libro", costo: 50},
    {nombre:"lapto", costo: 100},
    {nombre: "teclado", costo: 140},
];
/*Metodos para recorrer el array   filter*/
var articulosFil = articulos.filter(function(articulo){
    return articulo.costo <= 300
});
/* metodo map, genera otro array con la propiedad llamada */
var articulosMap = articulos.map(function(hola) {
    return hola.nombre
});

/*Metodo fin, genera otro con un valor si que lo encuentra, true / false*/
var encuentraArt = articulos.find(function(hola){
    return hola.nombre === "Laptop"
});


/*Metodo for each, no genera un nuevo array, solo devuleve  */
articulos.forEach(function(hola){
    console.log(hola.nombre)
})

/*Metodo some  - regresa una validacion de verdadero o falso, genera un nuevo array*/
var articulosBaratos = articulos.some(function(hola){
    return hola.costo <= 140; /* Es un metodo como el buleano*/
});