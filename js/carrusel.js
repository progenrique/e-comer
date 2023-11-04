export default function carrusel() {
  const $btnAfter = document.querySelector(".after-btn"),
    $btnNext = document.querySelector(".next-btn"),
    $listaTarjetas = document.querySelectorAll(".slider-slide");
  let i = 0;

  document.addEventListener("click", (e) => {
    if (e.target === $btnAfter) {
      e.preventDefault();
      $listaTarjetas[i].classList.remove("active");
      i--;
      if (i < 0) {
        i = $listaTarjetas.length - 1;
      }

      $listaTarjetas[i].classList.add("active");
    }
    if (e.target === $btnNext) {
      e.preventDefault();
      $listaTarjetas[i].classList.remove("active");
      i++;
      if (i >= $listaTarjetas.length) {
        i = 0;
      }
      $listaTarjetas[i].classList.add("active");
    }
  });

  setInterval(() => {
    $listaTarjetas[i].classList.remove("active");
    i++;
    if (i >= $listaTarjetas.length) {
      i = 0;
    }
    $listaTarjetas[i].classList.add("active");
  }, 3000);
}
