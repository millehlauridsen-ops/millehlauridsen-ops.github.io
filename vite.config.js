import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Change to "/portfolio/" if you deploy to username.github.io/portfolio/
  base: "/",
});
