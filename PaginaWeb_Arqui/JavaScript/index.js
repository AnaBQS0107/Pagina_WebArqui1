document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.getElementById('exampleInputEmail1').value;
        const contraseña = document.getElementById('exampleInputPassword1').value;
        const recordarDatos = document.getElementById('exampleCheck1').checked;

        //  agregar la lógica de autenticación del usuario
        //  enviar los datos a un servidor para su verificación

        // Simplemente mostramos los datos en la consola para propósitos de demostración
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contraseña);
        console.log('Recordar Datos:', recordarDatos);

        // Aquí podrías redirigir al usuario a otra página después de iniciar sesión
    });
});
