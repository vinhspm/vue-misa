import axios from "../baseAxios.js";
import {ENDPOINTS} from '../endpoints.js'

export async function getEmployees() {
  const endpoint = ENDPOINTS.EMPLOYEES;
  return await axios.getAxios(endpoint);
}

/**
 * hàm lấy danh sách nhân viên theo filter
 * author: vinhkt
 * created: 22/09/2022 4h utc
 * @param {params: {pageSize, pageNumber, employeeFilter} } params
 * @returns
 */
export async function getEmployeesFilter(params) {
  const endpoint = ENDPOINTS.EMPLOYEES_FILTER;
  return await axios.getAxios(endpoint, params);
}

/**
 * hàm xoá nhân viên theo id
 * author: vinhkt
 * created: 22/09/2022 4h utc
 * @param {id} params 
 * @returns 
 */
export async function deleteEmployee(id) {
  const endpoint = ENDPOINTS.EMPLOYEES + '/' + id;
  return await axios.deleteAxios(endpoint);
}


export async function getNextEmployee() {
  const endpoint = ENDPOINTS.NEW_EMPLOYEE_CODE;
  return await axios.getAxios(endpoint);
}

export async function postEmployee(body) {
  const endpoint = ENDPOINTS.EMPLOYEES;
  return await axios.postAxios(endpoint, body);
}

export async function putEmployee(id, body) {
  const endpoint = ENDPOINTS.EMPLOYEES + '/' + id;
  return await axios.putAxios(endpoint, body);
}
