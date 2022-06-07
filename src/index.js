import cipher from './cipher.js';

function cifrar(){
let mensaje = document.getElementById("mensaje1").value;
let desplazamiento = parseInt(document.getElementById("desplazamientos").value);
document.getElementById("resultado").value = cipher.encode(desplazamiento, mensaje)
}

document.getElementById("cifrar").addEventListener('click',cifrar)

function descifrar(){
let mensaje = document.getElementById("mensaje1").value;
let desplazamiento = parseInt(document.getElementById("desplazamientos").value);
document.getElementById("resultado").value = cipher.decode(desplazamiento, mensaje)
}

document.getElementById("descifrar").addEventListener('click',descifrar)

function limpiar(){
    document.getElementById("mensaje1").value="";
    document.getElementById("desplazamientos").value="";
    document.getElementById("resultado").value=""
}
document.getElementById("limpiar").addEventListener('click',limpiar)

function copiar(){
let contenido = document.getElementById("resultado");
contenido.select()
//Es inseguro
//document.execCommand("copy")
navigator.clipboard.writeText(contenido.value)
}
document.getElementById("copiar").addEventListener('click',copiar)


console.log(cipher);
