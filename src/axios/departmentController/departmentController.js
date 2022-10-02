import axios from "../baseAxios.js";
import {ENDPOINTS} from '../endpoints.js'

// lấy tất cả phòng ban
export async function getDepartments() {
  const endpoint = ENDPOINTS.DEPARTMENTS;
  return await axios.getAxios(endpoint);
}