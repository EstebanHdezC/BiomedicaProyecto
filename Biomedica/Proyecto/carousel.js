document.addEventListener("DOMContentLoaded", () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let counter = 0;

    const updateSlidePosition = () => {
        const size = document.querySelector(".carousel-container").clientWidth; // Ancho del contenedor del carrusel
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    };

    // Botón para mover a la izquierda
    prevBtn.addEventListener("click", () => {
        if (counter <= 0) return; // Evitar desplazarse antes del primer gráfico
        counter--;
        updateSlidePosition();
    });

    // Botón para mover a la derecha
    nextBtn.addEventListener("click", () => {
        if (counter >= carouselSlide.children.length - 1) return; // Evitar ir más allá del último gráfico
        counter++;
        updateSlidePosition();
    });

    // Ajustar el tamaño de las gráficas al cambiar el tamaño de la ventana
    window.addEventListener("resize", updateSlidePosition);

    // Llamada inicial para ajustar el tamaño correctamente
    updateSlidePosition();
});
