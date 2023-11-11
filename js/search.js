export default function search() {
  const $figures = document.querySelectorAll("[data-pokemon]"),
    $input = document.querySelector(".header input"),
    $products = document.querySelector(".products-container");

  $input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let encontrado = false;
      for (let i = 0; i < $figures.length; i++) {
        if (e.target.value === $figures[i].dataset.pokemon) {
          console.log("si esta el pokemon");
          let $figure = $figures[i];
          $products.innerHTML = ``;
          $products.appendChild($figure);
          encontrado = true;
          break;
        }
      }
      if (!encontrado) {
        $products.innerHTML = `<h2>El pokemon ${e.target.value} no exixte o no esta en stok</h2>`;
        setTimeout(() => {
          location.reload();
        }, 3000);
      }
    }
  });
}
