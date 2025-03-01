document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-item");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownButton = document.getElementById("dropdownTrigger");

    const carouselTrack = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    const projectItems = Array.from(document.querySelectorAll(".project-item"));

    let currentIndex = 0;
    let itemWidth = projectItems[0].offsetWidth + 16; // Ancho del item + margen
    let visibleItems = Math.floor(carouselTrack.offsetWidth / itemWidth);
    let totalItems = projectItems.length;

    // Ajustar dinámicamente el ancho del carrusel
    function updateCarouselWidth() {
        itemWidth = projectItems[0].offsetWidth + 16; 
        visibleItems = Math.floor(carouselTrack.parentElement.offsetWidth / itemWidth);
        carouselTrack.style.width = `${totalItems * itemWidth}px`;
    }

    // Actualizar la posición del carrusel
    function updateCarousel() {
        const maxIndex = totalItems - visibleItems;
        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

        const newTransformValue = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${newTransformValue}px)`;

        prevButton.style.display = currentIndex === 0 ? "none" : "flex";
        nextButton.style.display = currentIndex >= maxIndex ? "none" : "flex";
    }

    // Eventos de navegación
    nextButton.addEventListener("click", () => {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Recalcular el tamaño del carrusel cuando la ventana cambie
    window.addEventListener("resize", () => {
        updateCarouselWidth();
        updateCarousel();
    });

    // Inicialización
    updateCarouselWidth();
    updateCarousel();


    // Lista de tecnologías
    const techs = ["Mostrar Todo", "HTML5", "CSS3", "SCSS", "Bootstrap", "JavaScript", "React", "ReactRouter", "Firebase"];

    // Poblar el dropdown con tecnologías
    dropdownMenu.innerHTML = techs.map(tech => `<a href="#" data-tech="${tech}">${tech}</a>`).join("\n");

    // Mostrar u ocultar el menú
    dropdownButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("open");
    });

    // Cerrar el dropdown si se hace clic fuera
    document.addEventListener("click", (event) => {
        if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("open");
        }
    });

    // Filtrar proyectos al hacer clic en una tecnología
    dropdownMenu.addEventListener("click", (event) => {
        event.preventDefault();
        const selectedTech = event.target.dataset.tech;

        if (!selectedTech) return;

        projects.forEach(project => {
            const badges = Array.from(project.querySelectorAll(".badge")).map(badge => badge.textContent.trim());

            if (selectedTech === "Mostrar Todo" || badges.includes(selectedTech)) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});
