document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let password = document.getElementById('password').value;

    // Mostrar la información del usuario
    mostrarInformacionUsuario(nombre, direccion, email, telefono, password);
});

function mostrarInformacionUsuario(nombre, direccion, email, telefono, password) {
    // Construir la información del usuario
    let infoUsuario = `
        <h2>Usuario registrado con éxito:</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Contraseña:</strong> ${password}</p>
    `;

    // Mostrar la información del usuario en el contenedor
    let informacionUsuario = document.getElementById('informacionUsuario');
    informacionUsuario.innerHTML = infoUsuario;
    informacionUsuario.classList.remove('hidden'); // Mostrar el contenedor
}

// Función para regresar al índice
function regresarAlMenu() {
    window.location.href = 'index.html'; 
}
