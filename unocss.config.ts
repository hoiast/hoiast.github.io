import { presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default {
  presets: [presetUno(), presetIcons(), presetScrollbar()],
  variants: [
    // hover:
    (matcher: string) => {
      if (!matcher.startsWith("hover:")) return matcher;
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.slice(6),
        selector: (s: string) => `${s}:hover`,
      };
    },
  ],
  safelist: [
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
