
// Función para obtener la hora y la fecha actual
function getDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();

    return {
        time: `${hours}:${minutes}:${seconds}`,
        date: `${day}/${month}/${year}`
    };
}

// Función para mostrar el reloj y la fecha en la interfaz
function displayDateTime() {
    const dateTime = getDateTime();
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const messageElement = document.getElementById('message');

    timeElement.textContent = dateTime.time;
    dateElement.textContent = dateTime.date;

    // Agregar mensajes basados en la hora
    const hour = parseInt(dateTime.time.split(':')[0]);
    let message = '';

    if (hour >= 0 && hour < 7) {
        message = 'Es hora de descansar. Apaga y sigue mañana';
    } else if (hour >= 7 && hour < 12) {
        message = 'Buenos días, desayuna fuerte y a darle al código';
    } else if (hour >= 12 && hour < 14) {
        message = 'Echa un rato más pero no olvides comer';
    } else if (hour >= 14 && hour < 16) {
        message = 'Espero que hayas comido';
    } else if (hour >= 16 && hour < 18) {
        message = 'Buenas tardes, el último empujón';
    } else if (hour >= 18 && hour < 22) {
        message = 'Esto ya son horas extras, ... piensa en parar pronto';
    } else {
        message = 'Buenas noches, es hora de pensar en parar y descansar';
    }

    messageElement.textContent = message;
}

// Función para actualizar el reloj y la fecha cada segundo
function updateTime() {
    displayDateTime();
    setInterval(displayDateTime, 1000);
}

// Llamar a la función para iniciar el reloj
updateTime();



