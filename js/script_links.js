document.addEventListener("DOMContentLoaded", function() {
    const tituloInput = document.getElementById('tituloInput');
    const enlaceInput = document.getElementById('enlaceInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const enlacesContainer = document.getElementById('enlacesContainer');

    // Cargar enlaces desde el localStorage al cargar la página
    cargarEnlaces();

    // Agregar un nuevo enlace
    agregarBtn.addEventListener('click', function() {
        const titulo = tituloInput.value;
        const enlace = enlaceInput.value;

        if (titulo && enlace) {
            agregarEnlace(titulo, enlace);
            guardarEnlaceLocalStorage(titulo, enlace);
            tituloInput.value = '';
            enlaceInput.value = '';
        } else {
            alert('Por favor ingresa un título y un enlace.');
        }
    });

    // Función agregar enlace al DOM
    function agregarEnlace(titulo, enlace) {
        const enlaceDiv = document.createElement('div');
        enlaceDiv.classList.add('enlace');

        const enlaceAnchor = document.createElement('a');
        enlaceAnchor.textContent = titulo;
        enlaceAnchor.setAttribute('href', enlace);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.classList.add('eliminarBtn');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
            enlaceDiv.remove();
            eliminarEnlaceLocalStorage(titulo);
        });

        enlaceDiv.appendChild(enlaceAnchor);
        enlaceDiv.appendChild(eliminarBtn);
        enlacesContainer.appendChild(enlaceDiv);
    }

    // Función guardar enlace en LocalStorage
    function guardarEnlaceLocalStorage(titulo, enlace) {
        let enlaces;
        if (localStorage.getItem('enlaces') === null) {
            enlaces = [];
        } else {
            enlaces = JSON.parse(localStorage.getItem('enlaces'));
        }

        enlaces.push({titulo, enlace});
        localStorage.setItem('enlaces', JSON.stringify(enlaces));
    }

    // Función cargar enlaces desde LocalStorage al cargar la página
    function cargarEnlaces() {
        let enlaces;
        if (localStorage.getItem('enlaces') === null) {
            enlaces = [];
        } else {
            enlaces = JSON.parse(localStorage.getItem('enlaces'));
        }

        enlaces.forEach(function(enlace) {
            agregarEnlace(enlace.titulo, enlace.enlace);
        });
    }

    // Función eliminar un enlace del LocalStorage
    function eliminarEnlaceLocalStorage(titulo) {
        let enlaces;
        if (localStorage.getItem('enlaces') === null) {
            enlaces = [];
        } else {
            enlaces = JSON.parse(localStorage.getItem('enlaces'));
        }

        enlaces.forEach(function(enlace, index) {
            if (enlace.titulo === titulo) {
                enlaces.splice(index, 1);
            }
        });

        localStorage.setItem('enlaces', JSON.stringify(enlaces));
    }
});
