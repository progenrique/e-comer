export default function header() {
  const $nav = document.querySelector(".header nav"),
    $input = document.querySelector(".header input");

  let mq = window.matchMedia("(max-width:720px)");

  const mediaQuerry = (e) => {
    if (e.matches) {
      $nav.classList.add("none");
      $input.classList.add("none");
    } else {
      $nav.classList.remove("none");
      $input.classList.remove("none");
    }
  };

  mq.addEventListener("change", mediaQuerry);
  mediaQuerry(mq);

  document.addEventListener("click", (e) => {
    if (e.target.matches(".search")) {
      const $input = document.querySelector(".header input"),
        $lupa = document.querySelector(".search");

      $input.classList.remove("none");
      $lupa.classList.add("none");
    }
  });
}
