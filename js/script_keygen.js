function generarKey(longitud){


// caracteres posibles 
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()-_=+'


// combinación de los conjuntos de caracteres

    const caracteres = mayusculas + minusculas + numeros + simbolos;

    let key = '';
    // Asegurarse de que la longitud esté dentro del rango permitido (mínimo: 12, máximo: 50)
    longitud = Math.max(12, Math.min(longitud, 50));
    // Generar la contraseña caracter por caracter
    for (let i = 0; i < longitud; i++) {
        // Obtener un índice aleatorio dentro del rango de caracteres
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        // Agregar el caracter correspondiente a la contraseña
        key += caracteres[randomIndex];
    }
    // Devolver la contraseña generada
    return key;


};

// Función para generar y mostrar la contraseña en el HTML
function generarYMostrarKey() {
    // Obtener la longitud especificada por el usuario
    const longitud = document.getElementById('longitud').value;
    // Generar la contraseña utilizando la función y la longitud especificadas
    const contrasenaGenerada = generarKey(Number(longitud));
    // Mostrar la contraseña generada en el HTML
    document.getElementById('keyGenerada').textContent = contrasenaGenerada;
}

// Asignar un manejador de eventos al botón de generación de contraseñas
document.getElementById('generarKey').addEventListener('click', generarYMostrarKey);



