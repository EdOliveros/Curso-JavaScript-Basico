// objeto basico
var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
}

miAuto.detalleDelAuto();

// crear mas objetos de un solo template
//1. crear el template
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//2. crear el objeto
var autoNuevo = new auto("tesla", "modelo 3", 2020)

// la consola regresa-->
autoNuevo
auto {marca: 'tesla', modelo: 'modelo 3', annio: 2020}


var autoNuevo2 = new auto("tesla", "modelo x", 2018)
var autoNuevo3 = new auto("ttoyota", "modelo 3", 2020)

// la consola regresa 
autoNuevo2
auto {marca: 'tesla', modelo: 'modelo x', annio: 2018}
autoNuevo3
auto {marca: 'ttoyota', modelo: 'modelo 3', annio: 2020}