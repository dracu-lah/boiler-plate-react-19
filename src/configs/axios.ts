import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { BASE_URL } from "@/constants/config";
import endPoint from "@/services/api/endPoint";

// Extended request config to track retry attempts
interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Set initial token if available
const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}

// Token refresh implementation
let refreshTokenPromise: Promise<string | null> | null = null;

const refreshToken = async (): Promise<string | null> => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = (async () => {
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const accessToken = localStorage.getItem("token");

        if (!refreshToken || !accessToken) throw new Error("No tokens found");

        const { data } = await api.post<{ accessToken: string }>(
          endPoint.auth.refreshToken,
          { refreshToken, accessToken },
        );

        localStorage.setItem("token", data.accessToken);
        api.defaults.headers.common["Authorization"] =
          `Bearer ${data.accessToken}`;
        return data.accessToken;
      } catch (error) {
        console.error(error);
        localStorage.clear();
        window.location.reload();
        return null;
      } finally {
        refreshTokenPromise = null;
      }
    })();
  }
  return refreshTokenPromise;
};

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as ExtendedAxiosRequestConfig;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await refreshToken();

      if (newAccessToken && originalRequest.headers) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    // if (error.response?.status === 403) {
    //   localStorage.clear();
    //   window.location.reload();
    // }

    return Promise.reject(error);
  },
);

export default api;
