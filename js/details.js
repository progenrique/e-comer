import nodal from "/js/nodal.js";
import header from "/js/header.js";
import search from "/js/search.js";

export async function detailsHtml() {
  try {
    const $container = document.querySelector(".container-elements");

    let respuesta = await axios.get("../html/details.html");

    $container.outerHTML = respuesta.data;
  } catch (err) {}
}

export async function details(id) {
  try {
    const $container = document.querySelector(".details-container");
    const $template = document.getElementById("details-template").content;
    const $fragment = document.createDocumentFragment();

    let pokemones = await axios.get(
        "https://api-json-server-omega.vercel.app/results"
      ),
      json = await pokemones.data;

    json.forEach((el) => {
      if (id === el.id) {
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
