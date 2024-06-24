function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
}

probarValidarNombre();

function probarValidacionCiudad() {

    console.assert(
        validarCiudad('') === 'Este campo debe tener una ciudad',
        'validar ciudad, no valido la ciudad'
    );
}

probarValidacionCiudad();

function probarValidacionRegalo() {

    console.assert(
        validarRegalo('') === 'Este campo debe tener una descripcion',
        'validar descripcion, no valido la descripcion'
    );
}

probarValidacionRegalo();




