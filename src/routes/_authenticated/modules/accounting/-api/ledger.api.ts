import { axios } from "@/configs/axios";

export default {
  get: async (params = {}) => {
    const { data } = await axios.get(`https://dummyjson.com/products`, {
      params,
    });
    return data;
  },

  post: async (params = {}) => {
    const { data } = await axios.get(`https://dummyjson.com/products`, {
      params,
    });
    return data;
  },
};
