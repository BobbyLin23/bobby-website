import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetIcons({
      scale: 1.4,
    }),
    presetUno(),
    presetMini({
      dark: "media",
    }),
  ],
});
