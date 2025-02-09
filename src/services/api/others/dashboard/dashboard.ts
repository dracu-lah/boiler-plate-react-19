import axios from "axios";
import endPoint from "../../endPoint";

export default {
  get: async (params = {}) => {
    const { data } = await axios.get(endPoint.dashboard, {
      params: params,
    });
    return data;
  },
};
