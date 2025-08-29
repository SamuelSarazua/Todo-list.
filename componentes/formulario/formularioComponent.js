// formularioComponent.js
export function formularioTarea(onSubmit) {
    const form = document.createElement('form');
    form.className = 'formulario-tarea';
    
    // Título de la tarea
    const grupoTitulo = document.createElement('div');
    grupoTitulo.className = 'form-grupo';
    
    const labelTitulo = document.createElement('label');
    labelTitulo.textContent = 'Nombre de la tarea';
    labelTitulo.htmlFor = 'titulo';
    
    const inputTitulo = document.createElement('input');
    inputTitulo.type = 'text';
    inputTitulo.id = 'titulo';
    inputTitulo.name = 'titulo';
    inputTitulo.required = true;
    inputTitulo.placeholder = 'Escribe el nombre de la tarea';
    
    grupoTitulo.append(labelTitulo, inputTitulo);
    
    // Estado de la tarea
    const grupoEstado = document.createElement('div');
    grupoEstado.className = 'form-grupo';
    
    const labelEstado = document.createElement('label');
    labelEstado.textContent = 'Estado';
    labelEstado.htmlFor = 'estado';
    
    const selectEstado = document.createElement('select');
    selectEstado.id = 'estado';
    selectEstado.name = 'estado';
    selectEstado.required = true;
    
    const estados = ['Pendiente', 'En progreso', 'Completada', 'Bloqueada'];
    estados.forEach(estado => {
        const option = document.createElement('option');
        option.value = estado.toLowerCase();
        option.textContent = estado;
        selectEstado.appendChild(option);
    });
    
    grupoEstado.append(labelEstado, selectEstado);
    
    // Fecha de asignación
    const grupoFechaAsignacion = document.createElement('div');
    grupoFechaAsignacion.className = 'form-grupo';
    
    const labelFechaAsignacion = document.createElement('label');
    labelFechaAsignacion.textContent = 'Fecha de asignación';
    labelFechaAsignacion.htmlFor = 'fecha-asignacion';
    
    const inputFechaAsignacion = document.createElement('input');
    inputFechaAsignacion.type = 'date';
    inputFechaAsignacion.id = 'fecha-asignacion';
    inputFechaAsignacion.name = 'fecha_asignacion';
    inputFechaAsignacion.required = true;
    
    grupoFechaAsignacion.append(labelFechaAsignacion, inputFechaAsignacion);
    
    // Fecha de entrega
    const grupoFechaEntrega = document.createElement('div');
    grupoFechaEntrega.className = 'form-grupo';
    
    const labelFechaEntrega = document.createElement('label');
    labelFechaEntrega.textContent = 'Fecha de entrega';
    labelFechaEntrega.htmlFor = 'fecha-entrega';
    
    const inputFechaEntrega = document.createElement('input');
    inputFechaEntrega.type = 'date';
    inputFechaEntrega.id = 'fecha-entrega';
    inputFechaEntrega.name = 'fecha_entrega';
    inputFechaEntrega.required = true;
    
    grupoFechaEntrega.append(labelFechaEntrega, inputFechaEntrega);
    
    // Botón de enviar
    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    btnSubmit.textContent = 'Guardar Tarea';
    btnSubmit.className = 'btn-guardar';
    
    form.append(
        grupoTitulo,
        grupoEstado,
        grupoFechaAsignacion,
        grupoFechaEntrega,
        btnSubmit
    );
    
    // Envío del formulario
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const tareaData = {
            titulo: inputTitulo.value,
            estado: selectEstado.value,
            fechaAsignacion: inputFechaAsignacion.value,
            fechaEntrega: inputFechaEntrega.value
        };
        
        onSubmit(tareaData);
        form.reset();
    });
    
    return form;
}
