import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
if(!baseUrl || !apiKey){
  throw new Error("Missing API Environment Variables");
}
const ApiUrl = axios.create({
  baseURL: `${baseUrl}/${apiKey}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
export default ApiUrl