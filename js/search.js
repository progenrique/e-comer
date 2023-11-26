export default function search() {
  const $figures = document.querySelectorAll("[data-pokemon]"),
    $input = document.querySelector(".header input"),
    $products = document.querySelector(".products-container");

  $input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evita la acción predeterminada del formulario
      let encontrado = false;

      for (let i = 0; i < $figures.length; i++) {
        if (e.target.value === $figures[i].dataset.pokemon) {
          console.log("Si está el Pokémon");
          let $figure = $figures[i];
          $products.innerHTML = ``;
          $products.appendChild($figure);

          encontrado = true;
          break;
        }
      }

      if (!encontrado) {
        console.log("No se encontró el Pokémon");
        $products.innerHTML = `<h2>El Pokémon ${e.target.value} no existe o no está en stock</h2>`;
      }
    }
  });
}
