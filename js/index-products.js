import nodal from "/js/nodal.js";
import header from "/js/header.js";
import getProducts from "/js/requests.js";
import search from "/js/search.js";
import { details, detailsHtml } from "/js/details.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  await getProducts();
  header();
  nodal();
  search();
});

document.addEventListener("click", async (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();

    await detailsHtml();
    console.log(e.target);
    details(e.target.dataset.link);
  }
});
