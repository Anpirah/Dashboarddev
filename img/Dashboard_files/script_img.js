document.addEventListener('DOMContentLoaded', function () {
  const backgrounds = [
    'url(img/img1.jpeg)',
    'url(img/img2.jpeg)',
    'url(img/img3.jpeg)',
    'url(img/img4.jpeg)',
    'url(img/img5.jpeg)',
    'url(img/img6.jpeg)',
    'url(img/img7.jpeg)',
    'url(img/img8.jpeg)',
    'url(img/img9.jpeg)',
    'url(img/img10.jpeg)'
  ]

  // Función para cambiar la imagen de fondo cada 15 segundos
  function cambiarImagenFondo () {
    const randomIndex = Math.floor(Math.random() * backgrounds.length)
    const randomBackground = backgrounds[randomIndex]
    document.body.style.backgroundImage = randomBackground
  }

  // Cambiar la imagen de fondo inicialmente
  cambiarImagenFondo()

  // Cambiar la imagen de fondo cada 15 segundos
  setInterval(cambiarImagenFondo, 15000) // 15 segundos
})
