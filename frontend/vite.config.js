import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Gör servern tillgänglig på alla nätverksgränssnitt
    port: 5173,
    watch: {
      usePolling: true, // För att stödja live reload i Docker
    },
  },
});
