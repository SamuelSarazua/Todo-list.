import { formularioTarea } from '../formulario/formularioComponent.js';

export function informacion(datos) {
    let info = document.createElement('div');
    info.className = 'div-info';

    let divBotones = document.createElement('div');
    divBotones.className = 'div-botones';

    let btnTareas = document.createElement('button');
    btnTareas.className = 'btn-tareas';
    btnTareas.textContent = '+ tareas';
    
    // Evento click para abrir el formulario
    btnTareas.addEventListener('click', () => {
        const form = formularioTarea((tareaData) => {
            console.log('Tarea guardada:', tareaData);
            // Cerrar el formulario después de guardar
            document.body.removeChild(modal);
        });
        
        // Crear modal para el formulario
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
        
        // Estilo para el formulario dentro del modal
        form.style.backgroundColor = 'white';
        form.style.padding = '20px';
        form.style.borderRadius = '8px';
        form.style.width = '80%';
        form.style.maxWidth = '500px';
        
        modal.appendChild(form);
        document.body.appendChild(modal);
        
        // Cerrar modal al hacer click fuera del formulario
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    });
    
    divBotones.appendChild(btnTareas);

    let btnArchivar = document.createElement('button');
    btnArchivar.className = 'btn-archivar';
    btnArchivar.textContent = 'Archivar';
    divBotones.appendChild(btnArchivar);

    info.appendChild(divBotones); 

    // ... (resto del código original de la función informacion)
    let divInfo = document.createElement('div');
    divInfo.className = 'div-info-texto';

    let estado = document.createElement('div');
    estado.className = 'estado';
    estado.textContent = datos.estado;
    divInfo.appendChild(estado);

    let titInfo = document.createElement('h2');
    titInfo.className = 'titulo-info';
    titInfo.textContent = datos.titulo;
    divInfo.appendChild(titInfo);

    let descripInfo = document.createElement('p');
    descripInfo.className = 'descripcion-info';
    descripInfo.textContent = datos.descripcion;
    divInfo.appendChild(descripInfo);

    let titIntegrantes = document.createElement('h2');
    titIntegrantes.className = 'titulo-info';
    titIntegrantes.textContent = 'Integrantes';
    divInfo.appendChild(titIntegrantes);

    let integrantes = document.createElement('div');
    integrantes.className = 'integrantes';
    datos.listaIntegrantes.forEach(emoji => {
        let span = document.createElement('span');
        span.textContent = emoji;
        integrantes.appendChild(span);
    });
    divInfo.appendChild(integrantes);

    info.appendChild(divInfo); 

    return info;
}