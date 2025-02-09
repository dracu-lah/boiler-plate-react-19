import { axios } from "@/configs/axios";
import endpoints from "./endpoints";
const ledger = {
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
export const accountingApis = { ledger };
