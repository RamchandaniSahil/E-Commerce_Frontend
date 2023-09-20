import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function getAllCategory() {
  await axios.get(`${BASE_URL}/api/collection`).then((response) => {
    console.log("RESPONSE ", response.data.collections);
    return response.data.collections;
  });
  //   console.log("CATEGIRY = ", category.data.collections);

  //   return category;
}
