import Axios from 'axios';
import Qs from 'qs';

export default function initRequest() {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const axios = Axios.create({
    baseURL,
    paramsSerializer: function (params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'});
    },
  });

  axios.interceptors.request.use(
    async (config) => {
      return config;
    },

    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    async (response) => {

      return response.data;
    },
    async (error) => {
      
      return Promise.reject(error);
    }
  );

  return axios;
};