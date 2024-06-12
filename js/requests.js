export default async function getProducts(elementosMostrar) {
  const $productosContainer = document.querySelector(".products-container"),
    $template = document.getElementById("template").content,
    $fragment = document.createDocumentFragment();
  //http://localhost:5555/results
  try {
    let pokemones = await axios.get(
        "https://api-json-server-omega.vercel.app/results"
      ),
      json = await pokemones.data;

    let em = elementosMostrar || json.length;
    for (let i = 0; i < em; i++) {
      $template.querySelector(".name").innerHTML = json[i].name;
      $template
        .querySelector("figure")
        .setAttribute("data-pokemon", json[i].name);
      $template
        .querySelector("figure")
        .setAttribute("data-figure-id", json[i].id);
      $template.querySelector(".price").innerHTML = json[i].price;
      $template.querySelector(".image").src = json[i].image;
      $template.querySelector(".image").alt = json[i].name;
      $template.querySelector("a").setAttribute("data-link", json[i].id);

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
