export async function post(form) {
  if (!form.id.value) {
    try {
      let options = {
        name: form.name.value,
        price: form.price.value,
        image: form.image.value,
        description: form.description.value,
      };
      console.log(options);
      let res = await axios.post(
        "https://api-json-server-omega.vercel.app/results",
        options
      );
    } catch (err) {
      const $formContainer = document.querySelector(".administrator-form");
      console.log(err.message);
      $formContainer.insertAdjacentHTML(
        "afterend",
        `<div>${err.message}</div>`
      );

      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  } else {
    console.log(form.id);
    try {
      let options = {
        name: form.name.value,
        price: form.price.value,
        image: form.image.value,
        description: form.description.value,
      };
      console.log(options);
      let res = await axios.put(
        `http://localhost:5555/results/${form.id.value}`,
        options
      );
    } catch (err) {
      const $formContainer = document.querySelector(".administrator-form");
      console.log(err.message);
      $formContainer.insertAdjacentHTML(
        "afterend",
        `<div>${err.message}</div>`
      );

      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  }
}

export async function put(btn) {
  try {
    const $form = document.querySelector(".form"),
      $figure = document.querySelector(`[data-id = "${btn.dataset.id}"]`);

    let pokemones = await axios.get(
        "https://api-json-server-omega.vercel.app/results"
      ),
      json = await pokemones.data;

    json.forEach((el) => {
      if (el.id === btn.dataset.id) {
        $form.name.value = el.name;
        $form.image.value = el.image;
        $form.price.value = el.price;
        $form.description.value = el.description;
        $form.id.value = el.id;
      }
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } catch (err) {
    console.log(err);
  }
}

export async function borrar(btn) {
  try {
    let isDelete = confirm(`estas seguro eliminar ${btn.dataset.name}`);
    if (isDelete) {
      let pokemones = await axios.delete(
        `https://api-json-server-omega.vercel.app/results/${btn.dataset.id}`
      );
    }
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
