import axios from "axios";
axios.defaults.timeout = 5000;
const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});
const headers = {
  "Content-Type": "application/json",
};

/**
 * hàm base axios xử lý http get request
 * author: vinhkt
 * created: 23/09/2022
 * @param endpoint 
 * @param query 
 * @returns 
 */
export const getAxios = async (endpoint, query) => {
  return await HTTP.get(endpoint, {
    params: {
      ...query,
    },
  });
};

/**
 * hàm base axios xử lý http post request
 * author: vinhkt
 * created: 23/09/2022
 * @param endpoint 
 * @param body 
 * @returns 
 */
export const postAxios = async (endpoint, body) => {
  
  return await HTTP.post(
    endpoint,
    {
      ...body,
    },
    { headers: headers }
  );
};

/**
 * hàm base axios xử lý http put request
 * author: vinhkt
 * created: 23/09/2022
 * @param endpoint 
 * @param body 
 * @returns 
 */
export const putAxios = async (endpoint, body) => {
  return await HTTP.put(
    endpoint,
    {
      ...body,
    },
    { headers: headers }
  );
};

/**
 * hàm base axios xử lý http delete request
 * author: vinhkt
 * created: 23/09/2022
 * @param endpoint 
 * @returns 
 */
export const deleteAxios = async (endpoint) => {
  return await HTTP.delete(endpoint);
};

export default { getAxios, postAxios, putAxios, deleteAxios };
