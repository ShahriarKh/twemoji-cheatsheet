import { create } from "zustand";

export const useAppSettings = create((set) => ({
    theme: "purple",
    skinTone: "",
    setTheme: (color) => set({ theme: color }),
    setSkinTone: (skin) => set({ skinTone: skin }),
}));
