// querySelector
const heading = document.querySelector('.header-texto h2');
heading.textContent = 'Nuevo Heading';

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = "Nuevo Texto";

// Crear un nuevo enlace
const nuevoEnlace = document.createElement('A');
nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Tienda';
nuevoEnlace.classList.add('navegacion-enlace');

// Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);