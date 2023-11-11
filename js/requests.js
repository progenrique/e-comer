export default async function getProducts(elementosMostrar) {
  const $productosContainer = document.querySelector(".products-container"),
    $template = document.getElementById("template").content,
    $fragment = document.createDocumentFragment();

  try {
    let pokemones = await axios.get("/json/pokemon.json"),
      json = await pokemones.data;

    //console.log(json.results);
    let em = elementosMostrar || json.results.length;
    //console.log(em);
    for (let i = 0; i < em; i++) {
      $template.querySelector(".name").innerHTML = json.results[i].name;
      $template
        .querySelector("figure")
        .setAttribute("data-pokemon", json.results[i].name);
      $template.querySelector(".price").innerHTML = json.results[i].price;
      $template.querySelector(".image").src = json.results[i].image;
      $template.querySelector(".image").alt = json.results[i].name;
      $template
        .querySelector("a")
        .setAttribute("data-link", json.results[i].name);

      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    }
    $productosContainer.appendChild($fragment);
  } catch (err) {
    console.log(err);
    //let message = err.response.statusText || "Ocurrió un error";
  } finally {
    //console.log("Esto se ejecutará independientemente del try... catch");
  }
}
