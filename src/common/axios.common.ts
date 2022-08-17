import axios from "axios";
import { envConfig } from "../config";

export default axios.create({
  baseURL: envConfig.env().API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
