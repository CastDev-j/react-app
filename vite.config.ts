import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  name: "React App | Sección 03",
  short_name: "React App | Sección 03",
  description: "Proyecto de ejemplo para la sección 03 del curso de React",
  theme_color: "#262626 ",
  icons: [
    {
      src: "vite.svg",
      sizes: "192x192",
      type: "image/svg",
    },
    {
      src: "vite.svg",
      sizes: "512x512",
      type: "image/svg",
    },
  ],
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({ registerType: "autoUpdate", manifest }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
