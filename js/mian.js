// Función para manejar el evento de clic en el botón de menú
function handleMenuToggle() {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")) {
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
}

// Función para cerrar el menú
function closeMenu() {
    navMenu.classList.remove("nav-menu_visible");
}

// Función para manejar el evento de desplazamiento en la ventana
function handleScroll() {
    const header = document.querySelector("header");
    header.classList.toggle("scroll", window.scrollY > 0);
}

// Función para manejar el cambio de idioma
function handleLanguage() {
    const isChecked = check.checked;
    
    if (isChecked) {
        location.href = "en/index.html";
    } else {
        location.href = "../index.html";
    }
}

// Selecciona los elementos del DOM necesarios
const navToggle = document.querySelector(".nav-toggle");
const navMenuItem = document.querySelector(".nav-menu");
const check = document.querySelector(".check");

// Registra los controladores de eventos
navToggle.addEventListener("click", handleMenuToggle);
navMenuItem.addEventListener("click", closeMenu);
check.addEventListener("click", handleLanguage);
window.addEventListener("scroll", handleScroll);

