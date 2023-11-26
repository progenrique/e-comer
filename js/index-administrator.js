import nodal from "/js/nodal.js";
import header from "/js/header.js";
import search from "/js/search.js";
import getProductsAdministrator from "./request-administrator.js";
import { borrar, post, put } from "./axios.js";
document.addEventListener("DOMContentLoaded", async (e) => {
  await getProductsAdministrator();
  header();
  nodal();
  search();
});

document.addEventListener("submit", (e) => {
  if (e.target.matches(".form")) {
    e.preventDefault();
    post(e.target);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".edit-btn")) {
    put(e.target);
  }
  if (e.target.matches(".delete-btn")) {
    console.log("borrar");
    borrar(e.target);
  }
});
