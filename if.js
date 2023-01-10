/* if (true) {
    console.log("Hola")
} else {
    console.log("soy falso")
}

if (true) {
    console.log("Hola")
} else if (false) {
    console.log("soy falso")
} else {
    
} */

var edad = 18;

if(edad === 18) {
    console.log("Puedes votar, tu 1ra votacion")
} else if( edad > 18){
    console.log("puedes votar de nuevo")
} else{
    console.log("aun no puedes votar bebe")
}

if(edad === 18) {
    console.log("Puedes votar, tu 1ra votacion")
} else if( edad > 18){
    console.log("puedes votar de nuevo")
} else if( edad > 18){
    console.log("puedes votar de nuevo")
} else if( edad > 18){
    console.log("puedes votar de nuevo")
} else {
    console.log("aun no puedes votar bebe")
}

// operador ternario, funciona como un if, y un else
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : "no, no soy uno"