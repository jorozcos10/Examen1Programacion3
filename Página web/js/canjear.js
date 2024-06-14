let puntosTotales = 0;

function regresarAlMenu() {
    window.location.href = 'index.html';
}

document.getElementById('donacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let tipoMaterial = document.getElementById('tipoMaterial').value;
    let cantidadKilos = parseFloat(document.getElementById('cantidadKilos').value);

    let puntosObtenidos = calcularPuntosPorKilos(tipoMaterial, cantidadKilos);
    puntosTotales += puntosObtenidos;

    document.getElementById('puntosObtenidos').textContent = puntosObtenidos;
    document.getElementById('puntosTotales').textContent = puntosTotales;

    // Habilitar el botón de canje si hay puntos suficientes
    let btnCanjear = document.getElementById('btnCanjear');
    btnCanjear.disabled = puntosTotales < getPuntosNecesarios(document.getElementById('tipoPremio').value);
});

function calcularPuntosPorKilos(tipoMaterial, cantidadKilos) {
    let puntosPorKilo = {
        'Papel': 2,
        'Plástico': 3,
        'Vidrio': 4,
        'Metal': 5
    };

    return puntosPorKilo[tipoMaterial] ? puntosPorKilo[tipoMaterial] * cantidadKilos : 0;
}

document.getElementById('tipoPremio').addEventListener('change', function() {
    let btnCanjear = document.getElementById('btnCanjear');
    btnCanjear.disabled = puntosTotales < getPuntosNecesarios(this.value);
});

function getPuntosNecesarios(tipoPremio) {
    let puntosPremio = {
        '1': 10,
        '2': 20,
        '3': 30,
        '4': 15,
        '5': 5
    };

    return puntosPremio[tipoPremio] || 0;
}

function canjearPremio() {
    let tipoPremio = document.getElementById('tipoPremio').value;
    let puntosNecesarios = getPuntosNecesarios(tipoPremio);

    if (puntosTotales >= puntosNecesarios) {
        puntosTotales -= puntosNecesarios;
        document.getElementById('puntosTotales').textContent = puntosTotales;

        let premioTexto = getTextoPremio(tipoPremio);
        let listaPremios = document.getElementById('listaPremios');
        let nuevoPremio = document.createElement('li');
        nuevoPremio.textContent = premioTexto;
        listaPremios.appendChild(nuevoPremio);

        alert('Premio canjeado con éxito!');
    } else {
        alert('No tienes suficientes puntos para canjear este premio.');
    }

    // Actualizar el estado del botón de canje
    let btnCanjear = document.getElementById('btnCanjear');
    btnCanjear.disabled = puntosTotales < getPuntosNecesarios(document.getElementById('tipoPremio').value);
}

function getTextoPremio(tipoPremio) {
    let textoPremio = {
        '1': 'Premio Ecológico',
        '2': 'Kit de Reciclaje',
        '3': 'Cupón de Descuento en Tienda Ecológica',
        '4': 'Eco-Taza Reutilizable',
        '5': 'Libreta Reciclada'
    };

    return textoPremio[tipoPremio] || 'Premio Desconocido';
}

