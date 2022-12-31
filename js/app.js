// BARRA DE NUMERO DE CARACTERES

let controlDeslizante = document.getElementById('miControlDeslizante');

// Obtener el elemento donde se mostrará el valor
let valor = document.getElementById('miValor');

// Establecer una función que se ejecute cada vez que se mueva el control deslizante
controlDeslizante.oninput = function() {
    // Actualizar el texto del elemento con el valor actual del control deslizante
    valor.innerHTML = ' ' + this.value;
}

// FUNCION CONTRASEÑA

function passGenerate(){
    
    // Establecer las opciones de contraseña

    let opciones = {
        opcion1: document.getElementById("opcion1").checked,
        opcion2: document.getElementById("opcion2").checked,
        opcion3: document.getElementById("opcion3").checked,
    }

    // Establecer el conjunto de caracteres a utilizar en la contraseña

    let conjuntoDeCaracteres = "";

    if(opciones.opcion1){
        conjuntoDeCaracteres = 
        "ABCDEFGHIJKLMNOPaQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }

    if(opciones.opcion2){
        conjuntoDeCaracteres = 
        "ABCD012345EFGHIJ456789KLMNOPaQRS456789TUVWXYZabcdefghij01234klmnopqrstuvwxyz0123456789";
    }

    if(opciones.opcion3){
        conjuntoDeCaracteres = 
        "ABCD$%&EF$%&GHIJKLMNOPaQR!@#STUV$%&WXYZa4567bcd$%efghi%&*jklmnop$%&rstuvwxyz!@#$%&*0123456789";
    }

    // Inicializar la contraseña generada
    let password = "";

    // Generar una contraseña aleatoria utilizando el conjunto de caracteres establecido

    for(let i = 1; i <= controlDeslizante.value;i++){

        password += conjuntoDeCaracteres.charAt(Math.floor(Math.random() * conjuntoDeCaracteres.length))
    }

    document.getElementById("contenido").innerHTML = password;
}

let botonGenerate = document.getElementById("btn-generate");
botonGenerate.onclick = passGenerate;

// tema claro

document.getElementById("tema-claro").addEventListener("click", temaClaro);

let body = document.getElementById("body-oscuro");
let svg1 = document.getElementById("svg-white1");
let svg2 = document.getElementById("svg-white2");
let svg3 = document.getElementById("svg-white3");
let contenedor = document.getElementById("container");
let resultado = document.getElementById("contenido");
let btnBlanco = document.getElementById("btn-generate");

function temaClaro(){
    
    body.classList.toggle("body-blanco");
    svg1.classList.toggle("svg-black");
    svg2.classList.toggle("svg-black");
    svg3.classList.toggle("svg-black");
    contenedor.classList.toggle("container-principal-oscuro");
    resultado.classList.toggle("blanquito");
    btnBlanco.classList.toggle("btn-blanquito"); 
}
