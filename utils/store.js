import { create } from "zustand";

export const useAppSettings = create((set) => ({
    theme: "black",
    skinTone: "",
    emojiSize: "32",
    setTheme: (color) => set({ theme: color }),
    setSkinTone: (skin) => set({ skinTone: skin }),
    setEmojiSize: (size) => set({ emojiSize: size }),
}));
