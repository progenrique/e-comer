export default function search() {
  try {
    const $figures = document.querySelectorAll("[data-pokemon]"),
      $input = document.querySelector(".header input"),
      $products = document.querySelector(".products-container");
    $input.addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        let encontrado = false;

        let pokemones = await axios.get(
            "https://api-json-server-omega.vercel.app/results"
          ),
          json = await pokemones.data;

        for (let i = 0; i < json.length; i++) {
          if (e.target.value === json[i].name) {
            let $figure = `
            <figure>
              <img class="image" src="${json[i].image}" alt="" />
              <figcaption class="name">${json[i].name}</figcaption>
              <figcaption class="price">${json[i].price}</figcaption>
              <figcaption class="link"><a href="" data-link=${json[i].id} >Ver mas</a></figcaption>
            </figure>`;
            $products.innerHTML = ``;
            $products.insertAdjacentHTML("afterbegin", $figure);

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
  } catch (err) {}
}
