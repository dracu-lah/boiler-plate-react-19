import { axios } from "@/configs/axios";
import endPoint from "@/services/api/endPoint";

export default {
  login: async (postData: unknown) => {
    const { data } = await axios.post(endPoint.login, postData);
    return data;
  },
  refresh: async (postData: unknown) => {
    const { data } = await axios.post(endPoint.refresh, postData);
    return data;
  },
};
