import { create } from "zustand";

// Define the authentication state type
export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  data: Record<string, unknown> | null;
  setToken: (payload: {
    accessToken: string;
    refreshToken: string;
    data: Record<string, unknown>;
  }) => void;
  clearToken: () => void;
}

// Create Zustand store
const useAuthStore = create<AuthState>((set) => ({
  accessToken: localStorage.getItem("accessToken"),
  refreshToken: localStorage.getItem("refreshToken"),
  data: localStorage.getItem("userData")
    ? JSON.parse(localStorage.getItem("userData")!)
    : null,

  setToken: ({ accessToken, refreshToken, data }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userData", JSON.stringify(data));
    set({ accessToken, refreshToken, data });
  },

  clearToken: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userData");
    set({ accessToken: null, refreshToken: null, data: null });
  },
}));

export default useAuthStore;
