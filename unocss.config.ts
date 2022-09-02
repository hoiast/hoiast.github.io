import { presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default {
  shortcuts: {
    "bg-base": "bg-white dark:bg-[#050505]",
    "bg-disabled-base": "text-[#050505] dark:text-gray-300",
    "color-base": "text-[#050505] dark:text-gray-300",
    "transition-base": "transition duration-500",
  },
  presets: [presetUno(), presetIcons(), presetScrollbar()],
  safelist: [
    "pb-4",
    "pb-1",
    "space-x-0.5",
    "space-y-0.5",
    "space-x-1",
    "space-y-1",
    "space-x-2",
    "space-y-2",
    "space-x-3",
    "space-y-3",
    "space-x-4",
    "space-y-4",
    "space-x-6",
    "space-y-6",
    "space-x-8",
    "space-y-8",
    "duration-500",
    "duration-3000",
  ],
  theme: {
    animation: {
      keyframes: {},
      durations: { bounce: "2s" },
    },
  },
};
