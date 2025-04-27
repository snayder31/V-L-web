const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});

const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};
// Esperamos que el contenido de la página se haya cargado completamente
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos el título principal y subtítulo
  const title = document.querySelector("h1");
  const subtitle = document.querySelector("h2");

  // Le damos un pequeño retraso para el efecto de animación
  setTimeout(() => {
    title.classList.add("animated");
  }, 100); // La animación de h1 se activa casi al instante
  
  setTimeout(() => {
    subtitle.classList.add("animated");
  }, 600); // La animación de h2 se activa después de 0.6 segundos
});
