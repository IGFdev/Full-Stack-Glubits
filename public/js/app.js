const boton = document.getElementById('mostrar-btn');

boton.addEventListener('click', () => {
    const secretoH1 = document.getElementById('secreto');

    secretoH1.classList.toggle('oculto');

    if (secretoH1.classList.contains('oculto')) {
        boton.innerText = 'Mostrar secreto';
    } else {
        boton.innerText = 'Ocultar secreto';
    }

    //boton.innerText = secretoH1.classList.contains('oculto') ? 'Mostrar secreto' : 'Ocultar secreto';
});

boton.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'red';
});

boton.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'whitesmoke';
});


document.addEventListener('DOMContentLoaded', () => {
    alert('sitio cargado correctamente');
});

document.addEventListener('keydown', (e) => {
    console.log(e.key)

    if (e.key === 'a') {
        const secretoH1 = document.getElementById('secreto');

        secretoH1.classList.toggle('oculto');

        if (secretoH1.classList.contains('oculto')) {
            boton.innerText = 'Mostrar secreto';
        } else {
            boton.innerText = 'Ocultar secreto';
        }
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.log('hola')
})