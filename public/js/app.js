/* console.log(document.querySelector('h1'));
console.log(document.querySelector('.test'));
console.log(document.querySelector('#test2')); */

/* console.log(document.querySelectorAll('h1'));
console.log(document.querySelectorAll('.test3'));
console.log(document.querySelectorAll('#test2')); */

/* console.log(document.getElementById('test'))
console.log(document.getElementsByClassName('.test3')) */

/* const title = document.getElementById('title');
const body = document.querySelector('body');

//body.style.backgroundColor = 'teal';

const hayError = false;

if (hayError){
    title.style.color = 'red';
} else {
    title.style.color = 'green';
} */

//const parrafo = document.querySelector('#parrafo')
const parrafo = document.getElementById('parrafo');

parrafo.innerHTML = 'Hola estoy modificando el elemento desde js';

const lista = document.getElementById('lista');

const paises = ['arg', 'peru', 'ngr'];

paises.forEach(paisActual => {
    lista.innerHTML += `<li class="rojo">${paisActual}</li>`
});

const password = document.getElementById('password');

console.log(password.value);

if (password.value.length < 8){
    //alert('La contraseña es muy corta')
}

const paisesLi = Array.from(document.querySelectorAll('li'));

paisesLi.forEach(paisActual => {
    if(paisActual.innerHTML === 'arg'){
        paisActual.classList.toggle('verde')
    } else if (paisActual.innerHTML === 'ngr'){
        paisActual.classList.add('rojo');
    }
});

/* const nombre = prompt('cuál es tu nombre?');

const title = document.getElementById('title');

title.innerHTML = 'Bienvenido ' + nombre;

console.log(confirm('Estás seguro de tu acción?')); */

//console.log(prompt('Cuántos años tenés?'));

console.log(confirm('Advertencia! Estás seguro de que quieres ingresar a este sitio?'));