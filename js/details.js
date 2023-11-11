import nodal from "/js/nodal.js";
import header from "/js/header.js";
import search from "/js/search.js";

export async function detailsHtml() {
  try {
    const $body = document.querySelector("body");

    let respuesta = await axios.get("./details.html");
    $body.innerHTML = respuesta.data;
  } catch (err) {}
}

export async function details(name) {
  try {
    const $container = document.querySelector(".details-container");
    const $template = document.getElementById("details-template").content;
    const $fragment = document.createDocumentFragment();

    let pokemones = await axios.get("/json/pokemon.json"),
      json = await pokemones.data;

    json.results.forEach((el) => {
      if (name === el.name) {
        $template.querySelector(".details-title").innerHTML =
          el.name.toUpperCase();
        $template.querySelector(".details-image").src = el.image;
        $template.querySelector(".details-description").innerHTML =
          el.description;

        let $clone = document.importNode($template, true);
        $fragment.appendChild($clone);
      }
    });

    $container.appendChild($fragment);
    header();
    nodal();
    search();
  } catch (err) {}
}
