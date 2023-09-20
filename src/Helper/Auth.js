import axios from "axios";

const BASE_URL = "http://localhost:4000";

export async function createAccount(data) {
  const newUser = await axios.post(`${BASE_URL}/api/auth/signup`, data);
  // .then((response) => console.log(response))
  // .catch((error) => console.log(error));
  return { newUser };
}

export async function loginUser(data) {
  const login = await axios
    .post(`${BASE_URL}/api/auth/login`, data)
    .then((response) => {
      return response;
    })
    .catch((error) => console.log(error));
  return { login };
}
