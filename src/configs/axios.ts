import { BASE_URL } from "@/constants/config";
import endPoint from "@/services/api/endPoint";
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const api = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

/**
 * Queue to hold pending requests while refreshing the token
 */
let refreshTokenPromise: Promise<string | null> | null = null;

/**
 * Refresh token API implementation
 */
const RefreshTokenAPI = async (tokens: {
  refreshToken: string;
  accessToken: string;
}) => {
  return api.post<{ accessToken: string }>(endPoint.auth.refreshToken, tokens);
};

/**
 * Refreshes the access token using the refresh token stored in localStorage
 */
const refreshToken = async (): Promise<string | null> => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = (async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const accessToken = localStorage.getItem("token");

        if (!refreshToken || !accessToken) throw new Error("No tokens found");

        const { data } = await RefreshTokenAPI({ refreshToken, accessToken });
        localStorage.setItem("token", data.accessToken);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${data.accessToken}`;

        return data.accessToken;
      } catch (error) {
        console.error("Token refresh failed:", error);
        localStorage.clear();
        window.location.reload();
        return null;
      } finally {
        refreshTokenPromise = null; // Reset promise after refresh attempt
      }
    })();
  }

  return refreshTokenPromise;
};

/**
 * Extended Axios request config to include retry flag
 */
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

/**
 * Axios response interceptor for handling token expiration
 */
// api.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   async (error: AxiosError) => {
//     const originalRequest = error.config as ExtendedAxiosRequestConfig;
//
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const newAccessToken = await refreshToken();
//
//       if (newAccessToken && originalRequest.headers) {
//         originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       }
//     }
//
//     if (error.response?.status === 403) {
//       localStorage.clear();
//       window.location.reload();
//     }
//
//     return Promise.reject(error);
//   },
// );

export { api as axios };
