document.addEventListener("DOMContentLoaded", function() {
    const tituloInput = document.getElementById('tituloInput');
    const linkInput = document.getElementById('linkInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const linkContainer = document.getElementById('linkContainer');

    // Cargar enlaces desde el localStorage al cargar la página
    cargarLinks();

    // Agregar un nuevo enlace
    agregarBtn.addEventListener('click', function() {
        const titulo = tituloInput.value;
        const link = linkInput.value;

        if (titulo && link) {
            agregarLink(titulo, link);
            guardarLinkLocalStorage(titulo, link);
            tituloInput.value = '';
            linkInput.value = '';
        } else {
            alert('Por favor ingresa un título y un enlace.');
        }
    });

    // Función para agregar un enlace al DOM
    function agregarLink(titulo, link) {
        const linkDiv = document.createElement('div');
        linkDiv.classList.add('link');

        const linkAnchor = document.createElement('a');
        linkAnchor.textContent = titulo;
        linkAnchor.setAttribute('href', link);

        const eliminarBtn = document.createElement('button');
        eliminarBtn.classList.add('eliminarBtn');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.addEventListener('click', function() {
            linkDiv.remove();
            eliminarLinkLocalStorage(titulo); // Corrección: "eliminarLinkLocalStorage" en lugar de "eliminarEnlaceLocalStorage"
        });

        linkDiv.appendChild(linkAnchor);
        linkDiv.appendChild(eliminarBtn);
        linkContainer.appendChild(linkDiv); // Corrección: "linkContainer" en lugar de "enlacesContainer"
    }

    // Función para guardar un enlace en el LocalStorage
    function guardarLinkLocalStorage(titulo, link) { // Corrección: Cambiar el nombre de la función a "guardarLinkLocalStorage"
        let links;
        if (localStorage.getItem('links') === null) {
            links = [];
        } else {
            links = JSON.parse(localStorage.getItem('links'));
        }

        links.push({titulo, link}); // Corrección: "link" en lugar de "links"
        localStorage.setItem('links', JSON.stringify(links));
    }

    // Función para cargar enlaces desde el LocalStorage al cargar la página
    function cargarLinks() {
        let links;
        if (localStorage.getItem('links') === null) {
            links = [];
        } else {
            links = JSON.parse(localStorage.getItem('links'));
        }

        links.forEach(function(link) {
            agregarLink(link.titulo, link.link);
        });
    }

    // Función para eliminar un enlace del LocalStorage
    function eliminarLinkLocalStorage(titulo) {
        let links;
        if (localStorage.getItem('links') === null) {
            links = [];
        } else {
            links = JSON.parse(localStorage.getItem('links'));
        }

        links.forEach(function(link, index) {
            if (link.titulo === titulo) {
                links.splice(index, 1);
            }
        });

        localStorage.setItem('links', JSON.stringify(links));
    }
});
