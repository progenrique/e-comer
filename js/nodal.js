export default function nodal() {
  const $nodal = document.querySelector(".menu-nodal"),
    $btnOpen = document.querySelector(".btn-open"),
    $btnColse = document.querySelector(".btn-close"),
    $nav = document.querySelector(".header_container nav");

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-open")) {
      e.target.classList.add("none");
      $btnColse.classList.remove("none");
      $nodal.classList.add("active");
    }
    if (e.target.matches(".btn-close")) {
      e.target.classList.add("none");
      $btnOpen.classList.remove("none");
      $nodal.classList.remove("active");
    }
  });
}
