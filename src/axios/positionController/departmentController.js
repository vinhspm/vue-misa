import axios from "../baseAxios.js";
import {ENDPOINTS} from '../endpoints.js'

export async function getPositions() {
  const endpoint = ENDPOINTS.POSITIONS;
  return await axios.getAxios(endpoint);
}