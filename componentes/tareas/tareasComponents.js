import { tarea } from "../../module/itemTareas.js";

export function tareas(tareasDb) {
    const tareasContainer = document.createElement('div');
    tareasContainer.className = 'div-tareas1';

    tareasDb.forEach((item, i) => {
        // Pasamos todo el objeto item a la función tarea
        tareasContainer.appendChild(tarea(item));
    });

    return tareasContainer;
}
