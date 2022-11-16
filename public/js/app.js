const formulario = document.getElementById('login-form');
const nombreTxt = document.getElementById('nombreH1');
const passwordTxt = document.getElementById('passwordH2');
const emailTxt = document.getElementById('emailH3');
const nombreError = document.getElementById('nombreError');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    nombreTxt.innerText = formulario.nombre.value;
    passwordTxt.innerText = formulario.password.value;
    emailTxt.innerText = formulario.email.value;
});

formulario.nombre.addEventListener('focus', () => {
    console.log('Se clickea el input')
})

formulario.nombre.addEventListener('blur', () => {
    console.log('Se desclickea el input')
})

/* formulario.nombre.addEventListener('change', (e) => {
    if (formulario.nombre.value.length < 8) {
        nombreError.innerText = 'El nombre debe contener al menos 8 caracteres';
    } else {
        nombreError.innerText = '';
    }
}); */

formulario.nombre.addEventListener('input', e => {
    console.log(e.target.value);
    if (formulario.nombre.value.length < 8) {
        nombreError.innerText = 'El nombre debe contener al menos 8 caracteres';
    } else {
        nombreError.innerText = '';
    }
});