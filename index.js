import carrusel from "./js/carrusel.js";
import header from "./js/header.js";
import nodal from "./js/nodal.js";
import products from "./js/products.js";
import getProducts from "./js/requests.js";
import search from "./js/search.js";

document.addEventListener("DOMContentLoaded", (e) => {
  carrusel();
  getProducts();
  nodal();
  header();
});

document.addEventListener("click", (e) => {
  if (e.target.matches("#products")) {
    e.preventDefault();
    products();
  }
  if (e.target.matches(".search")) {
    search();
  }
});
