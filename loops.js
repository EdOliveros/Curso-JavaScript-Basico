//for
var estudiantes = ["maria", "sergio", "daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}


//for of
var estudiantes = ["maria", "sergio", "daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}


// while
var estudiantes = ["maria", "rosa", "sergio", "daniel"];

function saludarEstudiantes(estudiante){
    console.log(`hola, ${estudiante}`)
}

// si el parametro es verdadero, se ejecuta
while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}