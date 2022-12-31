//forma sencilla

function passGenerate(){
    
    let result = "";

    for(let i = 1; i <= controlDeslizante.value; i++){
        result += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length));
    }
    
    document.getElementById("contenido").innerHTML = result;

}

let botonGenerate = document.getElementById("btn-generate");
botonGenerate.onclick = passGenerate;