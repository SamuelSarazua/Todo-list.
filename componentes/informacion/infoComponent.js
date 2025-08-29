// informacionComponent.js
import { formularioTarea } from '../formulario/formularioComponent.js';

export function informacion(datos) {
    const info = document.createElement('div');
    info.className = 'div-info';

    // Botones superiores
    const divBotones = document.createElement('div');
    divBotones.className = 'div-botones';

    const btnTareas = document.createElement('button');
    btnTareas.className = 'btn-tareas';
    btnTareas.textContent = '+ tareas';

    btnTareas.addEventListener('click', () => {
        // Crear modal primero
        const modal = document.createElement('div');
        modal.className = 'modal-formulario';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '1000';

        // Crear formulario
        const form = formularioTarea((tareaData) => {
            console.log('Tarea guardada:', tareaData);
            document.body.removeChild(modal);
        });

        form.style.backgroundColor = 'white';
        form.style.padding = '20px';
        form.style.borderRadius = '8px';
        form.style.width = '80%';
        form.style.maxWidth = '500px';

        modal.appendChild(form);
        document.body.appendChild(modal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });

    divBotones.appendChild(btnTareas);

    const btnArchivar = document.createElement('button');
    btnArchivar.className = 'btn-archivar';
    btnArchivar.textContent = 'Archivar';
    divBotones.appendChild(btnArchivar);

    info.appendChild(divBotones);

    // Información de la tarea
    const divInfo = document.createElement('div');
    divInfo.className = 'div-info-texto';

    const estado = document.createElement('div');
    estado.className = 'estado';
    estado.textContent = datos.estado_tarea || '';
    divInfo.appendChild(estado);

    const titInfo = document.createElement('h2');
    titInfo.className = 'titulo-info';
    titInfo.textContent = datos.nombre || '';
    divInfo.appendChild(titInfo);

    const descripInfo = document.createElement('p');
    descripInfo.className = 'descripcion-info';
    descripInfo.textContent = datos.descripcion || '';
    divInfo.appendChild(descripInfo);

    const titIntegrantes = document.createElement('h2');
    titIntegrantes.className = 'titulo-info';
    titIntegrantes.textContent = 'Integrantes';
    divInfo.appendChild(titIntegrantes);

    const integrantes = document.createElement('div');
    integrantes.className = 'integrantes';
    (datos.listaIntegrantes || []).forEach(emoji => {
        const span = document.createElement('span');
        span.textContent = emoji;
        integrantes.appendChild(span);
    });
    divInfo.appendChild(integrantes);

    info.appendChild(divInfo);

    return info;
}
