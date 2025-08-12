import { tarea } from "../../module/itemTareas.js";

let tareasDb = [
    {
        titulo: "Tarea 1",
        estado: "completado",
        fechaAsignacion: "17/05/2025",
        fechaEntrega: "30/07/2025",
        integrantes: ["👩‍🏫", "🙂", "😎"]
    },
    {
        titulo: "Tarea 2",
        estado: "pendiente",
        fechaAsignacion: "20/05/2025",
        fechaEntrega: "05/08/2025",
        integrantes: ["👨‍🏫", "😐", "😅"]
    },
    {
        titulo: "Tarea 3",
        estado: "en progreso",
        fechaAsignacion: "25/05/2025",
        fechaEntrega: "10/08/2025",
        integrantes: ["👩‍🎓", "🤓", "🙃"]
    }
];


export function tareas() {
    let tareas = document.createElement('div');
    tareas.className = 'div-tareas1';

tareasDb.forEach((e, i) => {
    tareas.appendChild(tarea(
        i + 1,
        e.titulo,
        e.estado,
        e.fechaAsignacion,
        e.fechaEntrega,
        e.integrantes
    ));
});



    return tareas;
}
