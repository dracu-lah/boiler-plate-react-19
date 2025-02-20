import api from "@/configs/axios";
import endPoint from "../endPoint";

export default {
  login: async (params: unknown) => {
    const { data } = await api.post(endPoint.auth.login, params);
    return data;
  },
};
