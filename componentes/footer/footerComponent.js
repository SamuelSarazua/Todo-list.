export function footer() {
    const footer = document.createElement('footer');
    footer.className = 'main-footer';

    const link = document.createElement('a');
    link.href = 'https://github.com/SamuelSarazua/Todo-list';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '💻 Visita mi GitHub';

    footer.appendChild(link);
    return footer;
}
