export default async function getProductsAdministrator() {
  const $productosContainer = document.querySelector(".products-container"),
    $template = document.getElementById("template").content,
    $fragment = document.createDocumentFragment();

  try {
    let pokemones = await axios.get("http://localhost:5555/results"),
      json = await pokemones.data;
    $template
      .querySelector("figure")
      .removeChild($template.querySelector(".link"));

    for (let i = 0; i < json.length; i++) {
      $template.querySelector(".name").innerHTML = json[i].name;
      $template
        .querySelector("figure")
        .setAttribute("data-pokemon", json[i].name);
      $template.querySelector("figure").setAttribute("data-id", json[i].id);
      $template.querySelector(".price").innerHTML = json[i].price;
      $template.querySelector(".image").src = json[i].image;
      $template.querySelector(".image").alt = json[i].name;
      $template
        .querySelector(".delete-btn")
        .setAttribute("data-id", json[i].id);
      $template
        .querySelector(".delete-btn")
        .setAttribute("data-name", json[i].name);
      $template.querySelector(".edit-btn").setAttribute("data-id", json[i].id);

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
