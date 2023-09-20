import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function getCollection(id) {
  const collection = await axios
    .get(`${BASE_URL}/api/collection/${id}`)
    .then((response) => {
      //   console.log("response = ", response);
      return response.data.collection;
    })
    .catch((error) => console.log(error));
  //   console.log("Inner Collection = ", collection);
  return collection;
}
