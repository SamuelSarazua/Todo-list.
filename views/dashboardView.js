import { footer } from "../componentes/footer/footerComponent.js";
import { header } from "../componentes/header/headerComponent.js";
import { tareas } from "../componentes/tareas/tareasComponents.js";
import { informacion } from "../componentes/informacion/infoComponent.js";

export function dashbaoardView() {

    let dashboard  = document.createElement('section');
    dashboard.className = 'dashboard';

    //header
    dashboard.appendChild(header());

    let seccion1 = document.createElement('section');
    seccion1.className = 'seccion-1';
    seccion1.appendChild(tareas());
    seccion1.appendChild(informacion(
        {
            indice: 1,
            titulo: "Asignación de Proyecto",
            descripcion: "Descripción detallada del proyecto asignado, incluyendo objetivos y expectativas.",
            estado: "En Progreso",
            fechaAs: "01/06/2025",
            fechaEn: "30/06/2025",
            listaIntegrantes: ["👩‍💻", "👨‍💻", "👩‍🎓"]
        }
    ));
    dashboard.appendChild(seccion1);

    dashboard.appendChild(footer());

    return dashboard;
}

document.body.appendChild(dashbaoardView());