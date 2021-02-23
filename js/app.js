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

// Eventos
// console.log(1);

// window.addEventListener('load', function(){ 
//     console.log(2);
// });

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);
// });


// // window.onscroll = function() {
// //     console.log('scrolling...');
// // }

// console.log(5);

// Seleccionar elementos y asociar Eventos
const btnEnviar = document.querySelector('.boton-primario');
btnEnviar.addEventListener('click', function(evento) {
    evento.preventDefault();

    console.log('Enviando Formulario');
});

// Eventos Inputs y Text Area
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}