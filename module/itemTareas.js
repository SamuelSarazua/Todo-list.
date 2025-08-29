export function tarea(item) {
    let div = document.createElement('div');
    div.className = 'tarea';

    // Título
    let titulo = document.createElement('h3');
    titulo.textContent = item.nombre;
    div.appendChild(titulo);

    // Estado
    let estado = document.createElement('span');
    estado.textContent = item.estado_tarea;
    div.appendChild(estado);

    // Fecha asignada
    let fechaAsignada = document.createElement('p');
    fechaAsignada.textContent = `Asignada: ${item.fecha_asignada}`;
    div.appendChild(fechaAsignada);

    // Fecha de entrega
    let fechaEntrega = document.createElement('p');
    fechaEntrega.textContent = `Entrega: ${item.fecha_entrega}`;
    div.appendChild(fechaEntrega);

    // Integrantes (si existe)
    let integrantes = document.createElement('p');
    integrantes.textContent = item.integrantes || 'Ninguno';
    div.appendChild(integrantes);

    return div;
}
