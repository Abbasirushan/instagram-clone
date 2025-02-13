import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: (() => {
    const storedUser = localStorage.getItem("user-info");
    try {
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user-info:", error);
      return null;
    }
  })(),
  login: (user) => {
    localStorage.setItem("user-info", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("user-info");
    set({ user: null });
  },
  setUser: (user) => {
    localStorage.setItem("user-info", JSON.stringify(user));
    set({ user });
  },
}));

export default useAuthStore;
