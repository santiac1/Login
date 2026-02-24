
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();

    const headerHTML = `
        <div class="logo">Mi Proyecto</div>
        <nav>
            <a href="home.html" class="${currentPath === 'home.html' ? 'active' : ''}">Inicio</a>
            <a href="about.html" class="${currentPath === 'about.html' ? 'active' : ''}">Sobre Nosotros</a>
            <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contacto</a>
            <a href="#" onclick="logout()" class="logout-link">Salir</a>
        </nav>
    `;

    const footerHTML = `
        <p>&copy; 2026 Login. Todos los derechos reservados.</p>
    `;

    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
    }

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
});
