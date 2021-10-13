import axios from "axios";

export async function handler() {
  await axios.get("https://bing.com");
  return true;
}
