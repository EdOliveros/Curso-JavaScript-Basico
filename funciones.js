// Declarativas

function miFuncion() {
    return 3;
}

miFuncion();

// Expresión

var miFuncion = function() {
    return a + b;
}

miFuncion();

// console

function saludarEstudiantes(estudiante) {
    console.log(estudiante);
}
undefined

saludarEstudiantes("Diego")
VM543:2 Diego
undefined


function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}
undefined
saludarEstudiantes("Diego")
VM771:2 Hola Diego
undefined

function sumar(a,b) {}
undefined
function sumar(a,b) {
    var resultado = a + b;
}
undefined
function sumar(a,b) {
    var resultado = a + b;
}
undefined
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}
    
undefined
sumar(3,56)
59
function sumar(a,b) {
    return a + b;
}
    
undefined
sumar(3,6)
9