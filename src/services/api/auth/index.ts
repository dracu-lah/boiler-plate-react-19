import { axios } from "@/configs/axios";
import endPoint from "../endPoint";

export default {
  login: async (postData: unknown) => {
    const { data } = await axios.post(endPoint.auth.login, postData);
    return data;
  },
};
