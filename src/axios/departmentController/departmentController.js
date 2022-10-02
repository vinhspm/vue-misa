import axios from "../baseAxios.js";
import {ENDPOINTS} from '../endpoints.js'

export async function getDepartments() {
  const endpoint = ENDPOINTS.DEPARTMENTS;
  return await axios.getAxios(endpoint);
}