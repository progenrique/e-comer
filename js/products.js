export default async function products() {
  try {
    let respuesta = await axios.get("./products.html");
    console.log(respuesta.data);
  } catch (err) {}
}
