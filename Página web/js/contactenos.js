// js/contactenos.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

function regresarAlMenu() {
    window.location.href = 'index.html'; 
}
