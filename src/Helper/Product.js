import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function getAllProducts() {
  const product = await axios.get(`${BASE_URL}/api/product`);
  // console.log("PRODUCTS = ", product.data.products);

  return product.data.products;
}

export async function getAllProductsById(params) {
  const product = await axios
    .get(`${BASE_URL}/api/product/${params}`)
    .then((response) => {
      return response.data.products;
    })
    .catch((error) => console.log(error));
  return product;
}
