import { footer } from "../componentes/footer/footerComponent.js";
import { header } from "../componentes/header/headerComponent.js";

export function dashbaoardView() {

    let seccion  = document.createElement('section');

    //header
    seccion.appendChild(header());
    seccion.appendChild(footer());

    return seccion;
}

document.body.appendChild(dashbaoardView());