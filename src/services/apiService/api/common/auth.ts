import axios from "axios";
import endPoint from "../../endPoint";

export default {
  login: async (postData: unknown) => {
    const { data } = await axios.post(endPoint.login, postData);
    return data;
  },
  refresh: async (postData: unknown) => {
    const { data } = await axios.post(endPoint.login, postData);
    return data;
  },
};
