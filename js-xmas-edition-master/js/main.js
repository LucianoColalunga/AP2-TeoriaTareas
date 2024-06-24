const $form = document.querySelector("#carta-a-santa");

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descrpcionRegalo = $form['descripcion-regalo'].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descrpcionRegalo);

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracter";


    }
    return "";

}


function validarCiudad(ciudad) {

    if (ciudad.length === 0) {
        return "Este campo debe tener al menos 1 ciudad";
    }
return "";
}

function validarRegalo(descrpcionRegalo){

if (descrpcionRegalo === 0)    {
return "No existio regalo"
}
    return "";
}

