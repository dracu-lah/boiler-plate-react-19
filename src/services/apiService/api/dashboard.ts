import axios from "axios";

export default {
  get: async (params = {}) => {
    const { data } = await axios.get(`https://dummyjson.com/products`, {
      params: params,
    });
    return data;
  },
};
