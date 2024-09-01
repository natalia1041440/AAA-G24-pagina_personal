document.getElementById('menu-toggle').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    nav.classList.toggle('active');
});

const boton = document.querySelector('button[type="submit"]');

boton.textContent = 'Enviar';

boton.classList.add('mi-clase-personalizada');
