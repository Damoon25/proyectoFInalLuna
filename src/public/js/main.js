/*PANTALLA INGRESAR*/

/*Habilitar menu registro*/

const $btnIngresar = document.querySelector('.btnIngresar'),
    $btnRegistrar = document.querySelector('.btnRegistrar'),
    $iniciar = document.querySelector('.modalFormSignUp'),
    $registrar = document.querySelector('.modalFormSignIn');

document.addEventListener('click', e => {
    if (e.target === $btnRegistrar || e.target === $btnIngresar) {
        $iniciar.classList.toggle('active');
        $registrar.classList.toggle('active')
    }
});