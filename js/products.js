import nodal from "/js/nodal.js";
import header from "/js/header.js";
import getProducts from "/js/requests.js";
import search from "/js/search.js";

export default async function products() {
  const $body = document.querySelector("body");
  try {
    let respuesta = await axios.get("./products.html");

    $body.innerHTML = respuesta.data;
    await getProducts();
    header();
    nodal();
    search();
  } catch (err) {
    console.log(err);
  }
}
