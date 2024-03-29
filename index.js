import carrusel from "./js/carrusel.js";
import { details, detailsHtml } from "./js/details.js";
import header from "./js/header.js";
import nodal from "./js/nodal.js";

import getProducts from "./js/requests.js";
import search from "./js/search.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  carrusel();
  await getProducts("5");
  nodal();
  header();
  search();
});

document.addEventListener("click", async (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    await detailsHtml();
    details(e.target.dataset.link);
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.matches(".form-add")) {
    e.preventDefault();
    add(e.target);
  }
});
