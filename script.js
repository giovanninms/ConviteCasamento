document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");

    let startX;
    let scrollLeft;

    let isDown = false;

    scrollContainer.addEventListener("touchstart", (e) => {
        isDown = true;
        startX = e.touches[0].clientX;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener("touchend", () => {
        isDown = false;
    });

    scrollContainer.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].clientX;
        const walk = (x - startX) * 2; // Ajuste a sensibilidade do movimento multiplicando por um fator adequado
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});
