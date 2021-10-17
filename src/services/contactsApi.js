import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/contacts";

export default async function contactsApi() {
  const { data } = await axios("");
  return data;
}
