export function header() {

    let header = document.createElement('header');

    let h1 = document.createElement('h1');
    h1.textContent = '✏️ Todo List';
    header.appendChild(h1);

    let divTareas = document.createElement('div');
    divTareas.className = "div-tareas";
    header.appendChild(divTareas);

    let tituloTareas = document.createElement('h2');
    tituloTareas.textContent = 'Pendientes';
    divTareas.appendChild(tituloTareas);

    let contadorTareas = document.createElement('div');
    contadorTareas.className = "contador-tareas";
    contadorTareas.textContent = '0';
    divTareas.appendChild(contadorTareas);


    let divLogoUsuario = document.createElement('div');
    divLogoUsuario.className = "div-logo-usuario";
    header.appendChild(divLogoUsuario);

    let imgUsuario = document.createElement('img');
    imgUsuario.src = "https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1606/tuktukdesign160600119/59070200-icono-de-usuario-hombre-perfil-hombre-de-negocios-avatar-icono-persona-en-la-ilustraci%C3%B3n.jpg?ver=6";
    imgUsuario.alt = "Logo Usuario";
    imgUsuario.className = "logo-usuario";
    divLogoUsuario.appendChild(imgUsuario);


    return header;
}