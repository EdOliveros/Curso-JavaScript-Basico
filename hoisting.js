// hoisting de variables
console.log(miNombre);

var miNombre = "Ed";

// hoisting de funciones
hey();

function hey () {
    console.log("hola " miNombre);
}

var miNombre = "Ed";