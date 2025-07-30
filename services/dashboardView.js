import { header } from "../componentes/header/headerComponent.js";

export function dashbaoardView() {

    let seccion  = document.createElement('section');

    //header
    seccion.appendChild(header());

    return seccion;
}

document.body.appendChild(dashbaoardView());