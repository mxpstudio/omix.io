document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navigation");
    const closeButton = document.querySelector(".nav-close");
    const overlay = document.querySelector(".nav-overlay");
    const links = document.querySelectorAll(".nav-links a");
  
    toggleButton.addEventListener("click", () => {
      nav.classList.add("active");
    });
  
    closeButton.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  
    // Chiude cliccando sull'overlay
    overlay.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  
    // (Opzionale) Chiude cliccando su una voce del menu
    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  });