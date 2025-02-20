import api from "@/configs/axios";
import endPoint from "../endPoint";

export default {
  getKeys: async (params: unknown) => {
    try {
      const { data } = await api.get(endPoint.keys.get, { params });
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};
