export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes) {
    let div = document.createElement('div');
    div.className = 'tarea';

    // número de tarea
    let divNumero = document.createElement('div');
    divNumero.className = 'div-numero';
    divNumero.textContent = indice;

    // título de la tarea
    let divTitulo = document.createElement('h3');
    divTitulo.className = 'div-titulo';
    divTitulo.textContent = titulo;

    // estado de la tarea
    let divEstado = document.createElement('span');
    divEstado.className = 'div-estado';
    divEstado.textContent = estado;

    // estilos dinámicos según el estado
    if (estado.toLowerCase() === 'completado') {
        divEstado.classList.add('estado-completado');
    } else if (estado.toLowerCase() === 'pendiente') {
        divEstado.classList.add('estado-pendiente');
    } else if (estado.toLowerCase() === 'en proceso') {
        divEstado.classList.add('estado-proceso');
    }

    // fecha de asignación
    let divFechaAs = document.createElement('span');
    divFechaAs.className = 'div-fecha-asignacion';
    divFechaAs.textContent = fechaAs;

    // fecha de entrega
    let divFechaEn = document.createElement('span');
    divFechaEn.className = 'div-fecha-entrega';
    divFechaEn.textContent = fechaEn;

    // listado de integrantes
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = 'div-integrantes';
    listaIntegrantes.forEach(emoji => {
        let span = document.createElement('span');
        span.className = 'emoji-integrante';
        span.textContent = emoji;
        divIntegrantes.appendChild(span);
    });

    // botón de eliminar
    let divEliminar = document.createElement('div');
    divEliminar.className = 'div-eliminar';
    let emojiEliminar = document.createElement('span');
    emojiEliminar.textContent = '🗑️';
    divEliminar.appendChild(emojiEliminar);

    // agregar todos al contenedor
    div.appendChild(divNumero);
    div.appendChild(divTitulo);
    div.appendChild(divEstado);
    div.appendChild(divFechaAs);
    div.appendChild(divFechaEn);
    div.appendChild(divIntegrantes);
    div.appendChild(divEliminar);

    return div;
}
