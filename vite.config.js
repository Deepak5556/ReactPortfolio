import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: "https://deepakportfolioo.web.app",
      outDir: "dist",
      routes: [
        "/", 
        "/about", 
        "/projects", 
        "/contact",
        "/Resume.pdf",
        "/assets/DeepakkumarV-BdaZml-l.pdf"
      ],
      generateRobotsTxt: true,
    }),
  ],
});
