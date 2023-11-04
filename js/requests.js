export default async function getProducts() {
  const $productosContainer = document.querySelector(".products-container"),
    $template = document.getElementById("template").content,
    $fragment = document.createDocumentFragment();
  try {
    let pokemones = await axios.get("https://pokeapi.co/api/v2/pokemon"),
      json = await pokemones.data;

    // console.log(json);
    for (let i = 0; i < 8; i++) {
      $template.querySelector(".name").innerHTML = json.results[i].name;
      $template.querySelector(".price").innerHTML = `$${Math.floor(
        Math.random() * 100
      )}.00`;

      let pokemon = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${json.results[i].name}`
        ),
        jsonPokemon = await pokemon.data;
      //console.log(jsonPokemon.sprites.front_default);
      $template.querySelector(".image").src = jsonPokemon.sprites.front_default;
      $template.querySelector(".image").alt = json.results[i].name;

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    }

    let random = Math.floor(Math.random() * 100);

    $productosContainer.appendChild($fragment);
  } catch (err) {
    console.log(err);
    //let message = err.response.statusText || "Ocurrió un error";
  } finally {
    //console.log("Esto se ejecutará independientemente del try... catch");
  }
}
