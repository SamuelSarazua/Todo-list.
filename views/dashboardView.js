import { header } from "../componentes/header/headerComponent.js";
import { footer } from "../componentes/footer/footerComponent.js";
import { tareas } from "../componentes/tareas/tareasComponents.js";
import { informacion } from "../componentes/informacion/infoComponent.js";

export async function dashboard() {
    try {
        const res = await fetch("https://backend-todo-list-34qm.onrender.com/tareas");
        const tareasDb = await res.json();

        // Contenedor principal
        const main = document.createElement('main');
        main.className = 'dashboard'; // Contenedor general del dashboard

        // Header (fuera de seccion-1)
        main.appendChild(header());

        // Contenedor exclusivo para tareas e informacion
        const seccion = document.createElement('div');
        seccion.className = 'seccion-1';

        seccion.appendChild(tareas(tareasDb)); // Solo tareas dentro de seccion-1

        if (tareasDb.length > 0) {
            seccion.appendChild(informacion(tareasDb[0])); // Solo informacion dentro de seccion-1
        }

        // Agregar seccion-1 al main
        main.appendChild(seccion);

        // Footer (fuera de seccion-1)
        main.appendChild(footer());

        return main;
    } catch (err) {
        console.error("Error cargando dashboard:", err);
        return document.createTextNode("Error al cargar tareas");
    }
}

// Renderizado
export async function renderDashboard() {
    const app = document.getElementById("app") || document.body;
    const dash = await dashboard();
    app.innerHTML = "";
    if (dash instanceof Node) {
        app.appendChild(dash);
    } else {
        console.error("dashboard() no retornó un Node válido");
    }
}

renderDashboard();
