var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
];



//filter encontrar articulos con caracteristicas especificas
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// resultado en consola (no afecta el primer array)
articulosFiltrados
(2) [{…}, {…}]
0
: 
{nombre: 'Libro', costo: 320}
1
: 
{nombre: 'Teclado', costo: 500}
length
: 
2
[[Prototype]]
: 
Array(0)



//mapear todo el contenido y trae solo la caracteristica que yo le pida
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre 
 });
// resultado en la consola
 nombreArticulo
 (7) ['Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']



 // find, encontrar un articulo en particular
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
// la consola dice
encuentraArticulo
{nombre: 'Laptop', costo: 2000}



//forEach filtrar elementos sin crear un nuevo array, traer del objeto, solo lo que necesito filtrar
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
//la consola dice
VM1376:2 Bici
VM1376:2 TV
VM1376:2 Libro
VM1376:2 Celular
VM1376:2 Laptop
VM1376:2 Teclado
VM1376:2 Audifonos



//some, validacion de verdadero o falso, solo retorna true ó false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})
//la consola dice, se valida que si existen los elementos buscados
articulosBaratos
true