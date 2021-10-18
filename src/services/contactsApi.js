// import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3000/contacts";

// export default async function fetchContacts() {
//   const { data } = await axios("");
//   return data;
// }

import axios from "axios";

axios.defaults.baseURL = "https://616da773a83a850017caa66f.mockapi.io/contacts";

export async function fetchContacts() {
  const { data } = await axios("");
  return data;
}
