import axios from "axios";

const HTTP = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});
const headers = {
  "Content-Type": "application/json",
};
export const getAxios = async (endpoint, query) => {
  return await HTTP.get(endpoint, {
    params: {
      ...query,
    },
  });
};

export const postAxios = async (endpoint, body) => {
  
  return await HTTP.post(
    endpoint,
    {
      ...body,
    },
    { headers: headers }
  );
};

export const putAxios = async (endpoint, body) => {
  return await HTTP.put(
    endpoint,
    {
      ...body,
    },
    { headers: headers }
  );
};

export const deleteAxios = async (endpoint) => {
  return await HTTP.delete(endpoint);
};

export default { getAxios, postAxios, putAxios, deleteAxios };
